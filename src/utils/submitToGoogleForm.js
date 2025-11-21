export const submitResultToGoogleForm = async ({ name, USN, score, branch }) => {
  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSf5apXC7ccitHusLoh4vuBhzp3JGCj6obzxBzDvOdJDhq6JwQ/formResponse";

  const formData = new FormData();
  formData.append("entry.1232227636", name);   // replace with actual Name field ID
  formData.append("entry.649132381", USN);     // replace with actual USN field ID
  formData.append("entry.1343035910", score);
  formData.append("entry.464492350",branch)
  formData.append("entry.XXXXXXX", phone);
  formData.append("entry.YYYYYYY", college); // replace with actual Score field ID

  await fetch(formUrl, {
    method: "POST",
    body: formData,
    mode: "no-cors",
  });
};



