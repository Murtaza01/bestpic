import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="space-y-14 px-4 text-center">
        <h1 className="font-serif text-6xl uppercase">Best Picture</h1>
        <p className="text-xl">
          Be the judge of the best pictures shared by people, participate by
          adding your picture and enter a challenge with other people
        </p>
        <Link to={"login"} className="inline-block">
          {" "}
          <button className="rounded-md bg-rose-600 px-8 py-2 font-semibold text-white shadow-sm shadow-black/70">
            Participate Now
          </button>
        </Link>
      </div>
    </>
  );
};

export default Hero;
