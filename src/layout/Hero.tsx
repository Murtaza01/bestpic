import Slider from "../components/Slider";
import Box from "../components/Box";
import { SyntheticEvent } from "react";

const Hero = () => {
  function scrollToView(e: SyntheticEvent) {
    e.preventDefault();
    const target = e.target as HTMLAnchorElement;
    const id = target.hash.replace("#", "");
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth",
    });
  }
  return (
    <main className="relative h-screen text-neutral-800">
      <Slider />
      <div className="absolute inset-0 z-10 flex flex-col bg-white/20 backdrop-blur-[2px]">
        <div className="flex-1 px-4 text-center font-semibold">
          <Box style="h-[95%] gap-10">
            <h1 className="font-heading text-5xl">Best Picture</h1>
            <p className="font-paragraph text-lg">
              Be the judge of the best pictures shared by people, participate by
              adding your picture and enter a challenge with other people
            </p>
            <a
              href="#challenge"
              onClick={scrollToView}
              className="rounded-sm bg-white/30 px-5 py-1 font-mono backdrop-blur-md"
            >
              See Our Challenges
            </a>
          </Box>
        </div>
      </div>
    </main>
  );
};

export default Hero;
