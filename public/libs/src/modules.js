import { AES, lib } from "crypto-js";


async function encryptAndPushCode(bundlePath, secret = lib.WordArray.random(16).toString()) {
  try {
    const bundle = await fetch(bundlePath);
    const response = await bundle.text();
    const encryptedData = AES.encrypt(response, secret).toString();
    let payload = {
      stream: encryptedData,
      secret
    };
    
    return JSON.stringify(payload);
  } catch (err) {
    console.log("update failed:", err)
  }
}

Window.utils = {
  encryptAndPushCode
}