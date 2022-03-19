import { AES, lib } from "crypto-js";


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
    
    await fetch("/update-data", {
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
  encryptAndPushCode
}