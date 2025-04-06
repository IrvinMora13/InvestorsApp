import mongoose from "mongoose";

const progressSchema = new mongoose.Schema({
  project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
  description: String,
  date: { type: Date, default: Date.now },
  progressPercentage: Number
});

const Progress = mongoose.model("Progress", progressSchema);
export default Progress;
