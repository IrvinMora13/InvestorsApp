import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-md backdrop-blur-sm bg-opacity-80"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900 font-serif tracking-wider">
          BuildInvest<span className="text-yellow-600">.</span>
        </div>

        {/* Menú */}
        <ul className="hidden md:flex gap-10 text-gray-800 text-sm font-medium tracking-wide">
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/">Home</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/about">About Us</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/contact">Contact</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link
              to="/login"
              className="px-4 py-1 rounded border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white transition-all duration-300"
            >
              Login
            </Link>
          </motion.li>
        </ul>

        {/* Hamburguesa para móvil (próximamente) */}
      </div>
    </motion.nav>
  );
};

export default Navbar;
