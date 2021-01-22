import mongoose from "mongoose";

const exerciseSchema = mongoose.Schema({
  name: String,
  sets: Number,
  type: String,
  amount: String,
  category: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

export default Exercise;
