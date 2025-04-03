import dotenv from "dotenv";
import { UserEntities } from "../entities/user/user_entities";

const jwt = require("jsonwebtoken");

dotenv.config();
const secret: string = process.env.SECRET as string;
const secretRefresh: string = process.env.SECRETREFRESH as string;

export const VerifyJWTService = (token: string) => {
  let result = false;
  jwt.verify(token, secret, (err: any, user: UserEntities) => {
    if (err) {
      result = true;
    }
  });
  return result;
};
export const VerifyJWTRefreshService = (token: string) => {
  let result = false;
  jwt.verify(token, secretRefresh, (err: any, user: UserEntities) => {
    if (err) {
      result = true;
    }
  });
  return result;
};
export const decodedJWTService = (token: string) => {
  const result = jwt.verify(token, secret);
  return result;
};
export const decodedJWTRefreshService = (token: string) => {
  const result = jwt.verify(token, secretRefresh);
  return result;
};

export const SignJWTService = (user: UserEntities) => {
  const result = jwt.sign(
    { username: user.username, email: user.email },
    secret,
    {
      expiresIn: "15m",
    }
  );
  return result;
};

export const SignJWTServiceRefresh = (user: UserEntities) => {
  const result = jwt.sign(
    { username: user.username, email: user.email },
    secretRefresh,
    {
      expiresIn: "7d",
    }
  );
  return result;
};
