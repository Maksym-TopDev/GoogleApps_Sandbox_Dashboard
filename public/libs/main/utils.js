import { AES, lib } from "crypto-js";


function lengthInUtf8Bytes(str) {
  // Matches only the 10.. bytes that are non-initial characters in a multi-byte sequence.
  var m = encodeURIComponent(str).match(/%[89ABab]/g);
  return str.length + (m ? m.length : 0);
}

async function encryptAndPushCode(bundlePath, projectName, version) {
  const secret = lib.WordArray.random(16).toString();
  try {
    const bundle = await fetch(bundlePath);
    const response = await bundle.text();
    const encryptedData = AES.encrypt(response, secret).toString();
    let payload = {
      stream: encryptedData,
      secret, projectName, version
    };
    
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