import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Registrar un usuario
router.post("/register", async (req, res) => {
  try {
    const { nombre, email, contraseña, inversion } = req.body;

    // Verificar si el email ya existe
    const usuarioExistente = await User.findOne({ email });
    if (usuarioExistente)
      return res.status(400).json({ error: "El email ya está registrado" });

    // Crear nuevo usuario
    const nuevoUsuario = new User({ nombre, email, contraseña, inversion });
    await nuevoUsuario.save();

    res.status(201).json({ mensaje: "Usuario registrado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al registrar usuario" });
  }
});

export default router;
