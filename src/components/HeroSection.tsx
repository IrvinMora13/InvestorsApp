import { motion } from "framer-motion";
import Bridge from "../assets/consHome.jpg"

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full bg-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={Bridge}
          alt="Bridge"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-white/40" />
      </div>

      <div className="relative z-10 flex flex-col justify-center h-full px-10 lg:px-32">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-5xl lg:text-6xl font-serif font-semibold text-gray-900"
        >
          BextIQ <br /> Design & Construction
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-lg text-gray-700 max-w-xl"
        >
          We’re a full-service design & Construction studio with a product design approach. We build web products.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-10 w-fit px-6 py-2 border-b-2 border-gray-900 text-sm tracking-widest uppercase"
        >
          Hire Us
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSection;
