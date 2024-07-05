import { useEffect } from "react";
import Hero from "../layout/Hero";
import Aos from "aos";
import "aos/dist/aos.css";
import Nav from "../layout/Nav";
import Slider from "../components/Slider";
import { Link } from "react-router-dom";

const RootPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 600,
    });
  }, []);
  return (
    <>
      <main className="rootBg flex h-dvh flex-col gap-12 pb-5 text-white">
        <Nav />
        <Hero />
        <Slider />
      </main>
      <Link to={"mohamed-vs-fatima"}>
        <div className="mx-auto my-10 h-80 w-96 bg-green-500"></div>
      </Link>
    </>
  );
};

export default RootPage;
