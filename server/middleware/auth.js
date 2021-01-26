import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const jwtKey = process.env.JWT_SECRET_KEY;

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    let decodedData;

    if (token) {
      decodedData = jwt.verify(token, jwtKey);
      req.userId = decodedData?.id;
    }

    next();
  } catch (error) {
    console.error(error);
  }
};

export default auth;
