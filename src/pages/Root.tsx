import { useEffect } from "react";
import Hero from "../layout/Hero";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaCameraRetro } from "react-icons/fa";

const RootPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 600,
    });
  }, []);
  return (
    <div className="">
      <nav className="relative grid h-14 place-content-center bg-gray-200">
        <span className="absolute left-0 bg-red-300">EN</span>
        <span className="flex h-14 items-center rounded-full bg-white px-2 text-center">
          <FaCameraRetro className="p-1.5 text-5xl" />
        </span>
      </nav>
      <Hero />
    </div>
  );
};

export default RootPage;
