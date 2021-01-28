import mongoose from "mongoose";
import Session from "../models/session.js";

export const getSessions = async (req, res) => {
  try {
    const sessions = await Session.find({ creator: req.userId }).sort({
      createdAt: -1,
    });

    res.status(200).json(sessions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createSession = async (req, res) => {
  const session = req.body;
  const newSession = new Session({
    ...session,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });
  try {
    await newSession.save();
    res.status(201).json(newSession);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getSession = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No session with that ID was found");

  try {
    const session = await Session.findById(_id);
    res.status(200).json(session);
  } catch (error) {
    console.log(error);
  }
};

export const deleteSession = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No session with that ID was found");
  }

  await Session.findByIdAndRemove(_id);

  res.json({ message: "Session was successfully deleted" });
};

export const updateSession = async (req, res) => {
  const { id: _id } = req.params;
  const session = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No session with that ID was found");
  }

  const updatedSession = await Session.findByIdAndUpdate(
    _id,
    { ...session, _id },
    { new: true }
  );

  res.json(updatedSession);
};
