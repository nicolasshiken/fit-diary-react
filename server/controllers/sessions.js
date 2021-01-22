import mongoose from "mongoose";
import Session from "../models/session.js";

export const getSessions = async (req, res) => {
  try {
    const sessions = await Session.find();

    res.status(200).json(sessions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createSession = async (req, res) => {
  const session = req.body;
  const newSession = new Session(session);
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
    return res.status(404).send("No hay sesiones con ese ID");

  const session = await Session.findById(_id);
  res.status(200).json(session);
};
