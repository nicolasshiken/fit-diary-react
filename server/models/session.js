import mongoose from "mongoose";

const sessionSchema = mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  creator: String,
  exercises: [Object],
  createdAt: Date,
});

const Session = mongoose.model("Session", sessionSchema);

export default Session;
