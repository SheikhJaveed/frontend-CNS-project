import CryptoJS from "crypto-js";

// Encryption function
export const encryptData = (data, secretKey) => {
  try {
    return CryptoJS.AES.encrypt(data, secretKey).toString();
  } catch (error) {
    console.error("Error encrypting data:", error);
    return null;
  }
};

// Decryption function
export const decryptData = (encryptedData, secretKey) => {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    console.error("Error decrypting data:", error);
    return null;
  }
};
