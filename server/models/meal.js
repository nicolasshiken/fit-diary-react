import mongoose from "mongoose";

const mealSchema = mongoose.Schema({
  date: Date,
  title: String,
  details: String,
  protein: Number,
  fat: Number,
  carbos: Number,
  calories: Number,
  creator: String,
  createdAt: Date,
});

const Meal = mongoose.model("Meal", mealSchema);

export default Meal;
