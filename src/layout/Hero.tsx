import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="relative space-y-10 px-4 py-14 text-center">
        <h1 className="text-3xl">Best Picture</h1>
        <p className="text-lg">
          Be the judge of the best pictures shared by people, participate by
          adding your picture and enter a challenge with other people
        </p>
        <Link to={"login"} className="inline-block">
          {" "}
          <button className="rounded-lg bg-rose-600 px-4 py-1 text-white shadow-sm shadow-black/70">
            Participate Now
          </button>
        </Link>
      </div>
    </>
  );
};

export default Hero;
