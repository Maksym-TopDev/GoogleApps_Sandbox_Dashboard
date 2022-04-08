import { AES, enc } from "crypto-js";


Window.libs["decryptAndEval"] = function (secret, encryption) {
  const decryption = AES.decrypt(encryption, secret).toString(enc.Utf8);

  eval(decryption);
};
