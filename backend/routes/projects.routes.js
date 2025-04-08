import express from "express";
import Project from "../models/Project.js";
import Progress from "../models/Progress.js";
import User from "../models/User.js";
import verifyToken from "../middleware/authMiddleware.js"; 


const router = express.Router();

router.post("/create", verifyToken, async (req, res) => {
    try {
      const { title, location, totalInvestment, startDate, estimatedEndDate } = req.body;
  
      const newProject = new Project({
        title,
        location,
        totalInvestment,
        startDate,
        estimatedEndDate,
        investors: [req.user.id] 
      });
  
      const savedProject = await newProject.save();
      await User.findByIdAndUpdate(req.user.id, {
        $push: { projects: savedProject._id }
      });
  
      res.status(201).json(savedProject);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Error creating project" });
    }
  });
  

  router.post("/:projectId/progress", verifyToken, async (req, res) => {
    try {
      const { description, progressPercentage } = req.body;
      const { projectId } = req.params;
  
      const newProgress = new Progress({
        project: projectId,
        description,
        progressPercentage
      });
  
      const savedProgress = await newProgress.save();

      await Project.findByIdAndUpdate(projectId, {
        $push: { progressUpdates: savedProgress._id }
      });
  
      res.status(201).json(savedProgress);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Error creating progress update" });
    }
  });
  
  router.get("/my-projects", verifyToken, async (req, res) => {
    try {
      const user = await User.findById(req.user.id).populate({
        path: "projects",
        populate: {
          path: "progressUpdates"
        }
      });
  
      res.json(user.projects);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Error fetching projects" });
    }
  });
  

export default router;
