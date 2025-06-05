const bcrypt = require("bcrypt");
import dotenv from "dotenv";

dotenv.config();
const saltRounds: number = parseInt(process.env.saltRounds as string);

export const HashService = (password: string) => {
  const hash = bcrypt.hashSync(password, saltRounds);
  return hash;
};
export const CompareHashService = (password: string, base: String) => {
  const result = bcrypt.compareSync(password, base);

  return result;
};
