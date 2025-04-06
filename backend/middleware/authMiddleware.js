import jwt from "jsonwebtoken";

const JWT_SECRET = "clave_super_secreta"; 

const verificarToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ mensaje: "Token no proporcionado" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.usuario = decoded; // Guardamos los datos del usuario para usarlos después
    next(); // Pasa al siguiente middleware o ruta
  } catch (error) {
    return res.status(401).json({ mensaje: "Token inválido o expirado" });
  }
};

export default verificarToken;
