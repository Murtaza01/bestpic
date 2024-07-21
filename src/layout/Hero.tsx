import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import { FaChevronDown } from "react-icons/fa";
import Box from "../components/Box";

const Hero = () => {
  return (
    <main className="relative h-screen text-gray-100">
      <Slider />
      <div className="absolute inset-0 z-10 flex flex-col bg-gray-800/15 backdrop-blur-[2px]">
        <div className="flex-1 px-4 text-center font-semibold">
          <Box style="h-[95%] gap-10">
            <h1 className="font-serif text-5xl uppercase">best Picture</h1>
            <p className="text-lg">
              Be the judge of the best pictures shared by people, participate by
              adding your picture and enter a challenge with other people
            </p>
            <Link
              to={"challenge"}
              className="rounded-sm bg-white/40 px-5 py-1 backdrop-blur-sm hover:bg-green-500"
            >
              Participate Now
            </Link>
          </Box>
        </div>
        <span className="mx-auto w-[90%] text-center font-mono font-bold">
          or see our Challenges{" "}
          <FaChevronDown className="inline animate-bounce text-xl text-green-600" />{" "}
        </span>
      </div>
    </main>
  );
};

export default Hero;
