import fs from "fs";
import { google } from "googleapis";
import open from "open";
import readline from "readline";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
const TOKEN_PATH = "token.json";

// 1. Create OAuth client with credentials from Google Cloud
const credentials = {
  installed: {
    client_id: "YOUR_OAUTH_CLIENT_ID",
    client_secret: "YOUR_OAUTH_CLIENT_SECRET",
    redirect_uris: ["http://localhost:3000"],
  },
};

const { client_secret, client_id, redirect_uris } = credentials.installed;
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

const authUrl = oAuth2Client.generateAuthUrl({ access_type: "offline", scope: SCOPES });
console.log("Authorize this app by visiting this URL:", authUrl);
open(authUrl);

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question("Enter the code from that page here: ", (code) => {
  rl.close();
  oAuth2Client.getToken(code, (err, token) => {
    if (err) return console.error("Error retrieving token", err);
    fs.writeFileSync(TOKEN_PATH, JSON.stringify(token));
    console.log("✅ Token stored to", TOKEN_PATH);
  });
});
