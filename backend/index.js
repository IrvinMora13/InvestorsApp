import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import userRoutes from "./routes/userRoutes.js";
import verificarToken from "./middleware/authMiddleware.js";
import projectRoutes from "./routes/projects.routes.js";


const JWT_SECRET = process.env.JWT_SECRET;

dotenv.config(); 

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(helmet());
app.use(express.json());

// Conectar a MongoDB
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/inversionistas";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.error("Error conectando a MongoDB:", err));


app.get("/", (req, res) => {
  res.send("API funcionando");
});

app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
