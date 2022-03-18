import { AES, enc } from "crypto-js";
import { saveAs } from "file-saver";


function lengthInUtf8Bytes(str) {
  // Matches only the 10.. bytes that are non-initial characters in a multi-byte sequence.
  var m = encodeURIComponent(str).match(/%[89ABab]/g);
  return str.length + (m ? m.length : 0);
}

function encryptAndPushCode(unpushedBundledCode, securityKey) {
  fetch(unpushedBundledCode)
    .then(res => res.text())
    .then(bundleContent => {
      const encryptedData = AES.encrypt(bundleContent, securityKey).toString();
      
      const blob = new Blob([encryptedData], {type: "text/plain;charset=utf-8"});
      saveAs(blob, "s.txt");
    });
}


Window.utils = {
  lengthInUtf8Bytes,
  encryptAndPushCode
}