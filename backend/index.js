import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import userRoutes from "./routes/userRoutes.js";
import verificarToken from "./middleware/authMiddleware.js";


const JWT_SECRET = process.env.JWT_SECRET;

dotenv.config(); // Cargar variables de entorno

const app = express();

// Configuración de seguridad
app.use(cors());
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

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("API funcionando");
});

app.get("/perfil", verificarToken, (req, res) => {
  res.json({
    message: "Acceso autorizado",
    usuario: req.usuario 
  });
});


app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        nombre: user.nombre
      },
      JWT_SECRET,
      { expiresIn: "2h" } 
    );

    res.json({ mensaje: "Login exitoso", token });

  } catch (error) {
    console.error("Error en login:", error);
    res.status(500).json({ mensaje: "Error en el servidor" });
  }
});

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
