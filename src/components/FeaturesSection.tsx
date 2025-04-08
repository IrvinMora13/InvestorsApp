import { motion } from "framer-motion";

const features = [
  {
    title: "Web Development",
    description:
      "We build next-generation platforms for construction investment using modern tools & tech.",
  },
  {
    title: "Project Visualization",
    description:
      "Track progress of ongoing builds with dashboards and real-time updates.",
  },
  {
    title: "Investor Support",
    description:
      "We assist investors from day one with reports, forecasts and personalized service.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-white text-gray-800 py-24 px-6 md:px-16" id="features">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-sm text-yellow-600 tracking-widest font-semibold mb-4">
          WHY BUILDINVEST?
        </h2>
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-16"
        >
          What We Offer
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="space-y-4"
            >
              <h4 className="text-xl font-semibold">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
