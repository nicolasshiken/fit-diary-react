import mongoose from "mongoose";

const sessionSchema = mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  exercises: [Object],
});

const Session = mongoose.model("Session", sessionSchema);

export default Session;
