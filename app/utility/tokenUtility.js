import { JWT_EXPIRATION_TIME, JWT_SECRET } from "../config/config.js";
import jwt from "jsonwebtoken";

export const EncodeToken = (email, user_id) => {
  console.log(email, user_id);

  const KEY = JWT_SECRET;
  const EXPIRE = { expiresIn: JWT_EXPIRATION_TIME };
  const PAYLOAD = { email: email, user_id: user_id };
  return jwt.sign(PAYLOAD, KEY, EXPIRE);
};

export const DecodeToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (e) {
    return null;
  }
};
