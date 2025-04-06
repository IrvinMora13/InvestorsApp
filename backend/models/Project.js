import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: String,
  totalInvestment: Number,
  investors: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  progressUpdates: [{ type: mongoose.Schema.Types.ObjectId, ref: "Progress" }],
  startDate: Date,
  estimatedEndDate: Date
});

const Project = mongoose.model("Project", projectSchema);
export default Project;
