import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import camera from "../assets/images/camera3.svg";
import camera2 from "../assets/images/camera4.svg";
const Hero = () => {
  return (
    <>
      <div className="relative space-y-8 px-4 py-14 text-center">
        <h1 className="text-3xl">Best Picture</h1>
        <p className="text-lg">
          Be the judge of the best pictures shared by people, participate by
          adding your picture and enter a challenge with other people
        </p>
        <Link to={"login"} className="inline-block">
          {" "}
          <button className="rounded-lg bg-yellow-300 px-4 py-1 shadow-sm shadow-black/70">
            Participate Now
          </button>
        </Link>
        <img src={camera2} className="absolute left-0 top-0 w-36" alt="" />
        <img src={camera} className="absolute bottom-5 right-0 w-36" alt="" />
      </div>
      <Slider />
    </>
  );
};

export default Hero;
