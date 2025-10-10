import fs from "fs";
import { google } from "googleapis";

const credentials = JSON.parse(fs.readFileSync("./service-account.json", "utf8"));
console.log("🔑 Using service account:", credentials.client_email);

// Fix: normalize newlines in private key
const privateKey = credentials.private_key.replace(/\\n/g, "\n");

const auth = new google.auth.JWT(
  credentials.client_email,
  null,
  privateKey,
  ["https://www.googleapis.com/auth/spreadsheets.readonly"]
);

const sheets = google.sheets({ version: "v4", auth });
const SHEET_ID = "1KV2V4xy0EpzyRZWy0NSPHGtQ-_iWo_f7HON7DAX84zA";

(async () => {
  try {
    await auth.authorize();
    console.log("✅ Auth successful");

    const resp = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: "CSRRESPONSESHEET!A:Z", // <-- tab name must match exactly
    });

    console.log("✅ Rows fetched:", resp.data.values.length);
    console.log(resp.data.values.slice(0, 5));
  } catch (err) {
    console.error("❌ Error:", err.response?.data || err.message);
  }
})();
