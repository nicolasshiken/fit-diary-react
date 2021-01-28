import mongoose from "mongoose";
import Profile from "../models/profile.js";

export const updateProfile = async (req, res) => {
  const _id = req.userId;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No profile with that ID was found");
  }

  const profile = req.body;

  const updatedProfile = await Profile.findOneAndUpdate(
    { user: _id },
    {
      ...profile,
    },
    { new: true }
  );
  res.json(updatedProfile);
};

export const getProfile = async (req, res) => {
  const _id = req.userId;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No profile with that ID was found");
  }

  try {
    const profile = await Profile.findOne({ user: _id });
    res.status(200).json(profile);
  } catch (error) {
    console.error(error);
  }
};
