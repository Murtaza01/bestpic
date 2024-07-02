import { useEffect } from "react";
import Hero from "../layout/Hero";
import Aos from "aos";
import "aos/dist/aos.css";
import Nav from "../layout/Nav";

const RootPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 600,
    });
  }, []);
  return (
    <main className="h-[75dvh] bg-gradient-to-b from-gray-300 from-90% to-transparent">
      <Nav />
      <Hero />
    </main>
  );
};

export default RootPage;
