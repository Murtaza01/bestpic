import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import { FaChevronDown } from "react-icons/fa";

const Hero = () => {
  return (
    <main className="relative h-dvh">
      <Slider />
      <div className="absolute inset-0 z-10 flex flex-col bg-white/25 backdrop-blur-[2px]">
        <div className="flex-1 px-4 text-center font-semibold">
          <div className="flex h-[95%] flex-col items-center justify-center gap-10">
            <h1 className="font-serif text-5xl uppercase">Best Picture</h1>
            <p className="text-lg">
              Be the judge of the best pictures shared by people, participate by
              adding your picture and enter a challenge with other people
            </p>
            <Link
              to={"mohamed-vs-fatima"}
              className="rounded-sm bg-white/60 px-5 py-1 backdrop-blur-sm"
            >
              Participate Now
            </Link>
          </div>
        </div>
        <span className="mx-auto w-[90%] text-center font-mono font-bold">
          or see our Challenges{" "}
          <FaChevronDown className="inline animate-bounce text-xl" />{" "}
        </span>
      </div>
    </main>
  );
};

export default Hero;
