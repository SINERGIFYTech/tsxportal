const crypto = require("crypto");

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;
const IV = process.env.ENCRYPTION_IV;

function encryptPrivateKey(privateKey) {
  const cipher = crypto.createCipheriv(
    "aes-256-cbc",
    Buffer.from(ENCRYPTION_KEY),
    IV
  );
  let encrypted = cipher.update(privateKey, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}

function decryptPrivateKey(encryptedKey) {
  const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), IV);
  let decrypted = decipher.update(encryptedKey, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}


module.exports = {
  encryptPrivateKey,
  decryptPrivateKey
}
