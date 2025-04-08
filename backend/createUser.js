import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    const hashedPassword = await bcrypt.hash("admin", 10);

    const newUser = new User({
      name: "Admin User",
      email: "admin@admin.com",
      password: hashedPassword
    });

    await newUser.save();
    console.log("Usuario creado");
    mongoose.disconnect();
  })
  .catch(err => console.error("Error:", err));
