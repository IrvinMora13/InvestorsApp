import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }]
});

const User = mongoose.model("User", userSchema);
export default User;
