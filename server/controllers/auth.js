import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import dotenv from "dotenv";
import Profile from "../models/profile.js";

dotenv.config();
const jwtKey = process.env.JWT_SECRET_KEY;

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res
        .status(404)
        .json({ message: "User with that email doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign(
      {
        email: existingUser.email,
        id: existingUser._id,
      },
      jwtKey,
      { expiresIn: "12h" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signUp = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: "Email already taken" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const profile = await Profile.create({ user: result._id.toString() });

    const token = jwt.sign({ email: result.email, id: result._id }, jwtKey, {
      expiresIn: "12h",
    });

    res.status(200).json({ result, profile, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
