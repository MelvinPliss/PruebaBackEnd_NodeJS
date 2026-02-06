// import { hash, compare } from "bcryptjs";
import { sha256 } from 'js-sha256';

const encrypt = async (str: string) => {
    const buffer = Buffer.from(str, 'ascii');
    const passwordHash = await sha256(buffer);
    return passwordHash;
};

const verified = async (pass: string, passHash: string) => {
    const pwdHash = encrypt(pass);
    const isCorrect = await pwdHash == passHash;
    return isCorrect;
};

// const verified = async (pass: string, passHash: string) => {
//   const isCorrect = await compare(pass, passHash);
//   return isCorrect;
// };

export { encrypt, verified };