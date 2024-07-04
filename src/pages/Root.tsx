import { useEffect } from "react";
import Hero from "../layout/Hero";
import Aos from "aos";
import "aos/dist/aos.css";
import Nav from "../layout/Nav";
import Slider from "../components/Slider";

const RootPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 600,
    });
  }, []);
  return (
    <main className="rootBg h-[60dvh] text-white">
      <Nav />
      <Hero />
      <Slider />
    </main>
  );
};

export default RootPage;
