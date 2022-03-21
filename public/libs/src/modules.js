import { AES, lib } from "crypto-js";


async function encryptAndPushCode(bundlePath, secret = lib.WordArray.random(16).toString()) {
  function getVersion() {
    const partials = bundlePath.split('/');
    return partials[partials.length-1].split('.')[0];
  }

  try {
    const bundle = await fetch(bundlePath);
    const response = await bundle.text();
    const encryptedData = AES.encrypt(response, secret).toString();
    let payload = {
      stream: encryptedData,
      secret,
      version: getVersion()
    };
    
    return JSON.stringify(payload);
  } catch (err) {
    console.log("update failed:", err)
  }
}

Window.utils = {
  encryptAndPushCode
}