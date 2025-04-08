import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
      </main>
    </>
  );
};

export default Home;
