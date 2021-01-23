import mongoose from "mongoose";

const sessionSchema = mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  exercises: [Object],
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 540, // REMOVE THIS ON THE OFFICIAL SERVER
  },
});

const Session = mongoose.model("Session", sessionSchema);

export default Session;
