import express from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";


const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validamos si ya existe el usuario
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    const salt = await bcrypt.genSalt(10); 
    const encryptedPassword = await bcrypt.hash(encryptedPassword, salt);

    const newUsers = new User({
      name,
      email,
      password: encryptedPassword
    });

    await newUsers.save();

    res.status(201).json({ message: "Usuario registrado exitosamente" });

  } catch (error) {
    console.error("Error al registrar usuario:", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
});

export default router;
