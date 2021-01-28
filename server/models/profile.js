import mongoose from "mongoose";

const profileSchema = mongoose.Schema({
  weight: Number,
  height: Number,
  age: Number,
  user: String,
});

const Profile = mongoose.model("Profile", profileSchema);
export default Profile;
