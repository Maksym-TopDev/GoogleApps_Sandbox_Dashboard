import { AES, enc } from "crypto-js";
import { saveAs } from "file-saver";


function lengthInUtf8Bytes(str) {
  // Matches only the 10.. bytes that are non-initial characters in a multi-byte sequence.
  var m = encodeURIComponent(str).match(/%[89ABab]/g);
  return str.length + (m ? m.length : 0);
}

async function encryptAndPushCode(bundlePath, securityKey) {
  try {
    const bundle = await fetch(bundlePath)
    const response = await bundle.text();
    const encryptedData = AES.encrypt(response, "heymanNiceshot").toString();
    let payload = {};
    payload.data = encryptedData;
    console.log(payload)
    await fetch("/update-bucket", {
      method:"POST", 
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'same-origin', // include, *same-origin, omit
      body: JSON.stringify(payload)
    });
  } catch (err) {
    console.log("update failed:", err)
  }
}

Window.utils = {
  lengthInUtf8Bytes,
  encryptAndPushCode
}