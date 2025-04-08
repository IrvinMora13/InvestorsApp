import { ArrowBack, Google } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import axios from "../api/axios";
import HouseLogin from "../assets/House.jpg";



const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    try {
        const res = await axios.post("/login", { email, password });
        console.log("Login exitoso:", res.data);
        localStorage.setItem("token", res.data.token);
        
        navigate("/dashboard");
        
      } catch (err: any) {
        console.error("Error en login:", err.response?.data?.message || err.message);
      }
  }


  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Sección Izquierda */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-20 py-10">
        {/* Navbar pequeña */}
        <button
          onClick={() => navigate("/")}
          className="mb-4 text-gray-500 hover:text-gray-700 flex items-center gap-1"
        >
          <ArrowBack fontSize="small" />
          Back
        </button>

        <h2 className="text-2xl font-semibold mb-2">Welcome to</h2>
        <h1 className="text-4xl font-bold mb-4 text-blue-900">BextIQ</h1>
        <p className="text-gray-500 mb-6">
          Start investing in smart construction projects. Join the future of infrastructure!
        </p>
        <h3 className="text-2xl font-semibold mb-2">Login</h3>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md py-3 font-medium hover:bg-blue-600 transition-all"
          >
            Login
          </button>
        </form>

        <div className="my-4 text-center text-gray-400">or</div>

        <button
          type="button"
          className="border border-gray-300 rounded-md py-3 px-4 flex items-center justify-center gap-2 hover:bg-gray-100 transition-all"
        >
          <Google className="text-red-500" />
          Login with Google
        </button>

        <p className="text-sm text-gray-600 mt-6 text-center">
          You dont have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Contact Us
          </a>
        </p>
      </div>

      {/* Sección Derecha */}
      <div className="hidden md:flex flex-1 items-center justify-center bg-blue-50 p-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-md"
        >
          <img
            src={HouseLogin}
            alt="Visual"
            className="rounded-lg shadow-lg mb-6"
          />
          <h2 className="text-xl font-semibold mb-2 text-blue-800">
            Invest smartly, build the future.
          </h2>
          <p className="text-gray-600">
            Discover and support innovative real estate and construction projects.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
