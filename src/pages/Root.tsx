import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import Nav from "../layout/Nav";

const RootPage = () => {
  return (
    <>
      <main className="relative h-dvh">
        <Slider />
        <div className="absolute inset-0 z-20 flex flex-col bg-white/20 backdrop-blur-[1px]">
          <Nav />
          <div className="flex-1 px-4 text-center font-semibold">
            <div className="flex h-[90%] flex-col items-center justify-center gap-10">
              <h1 className="font-serif text-5xl uppercase">Best Picture</h1>
              <p className="text-lg">
                Be the judge of the best pictures shared by people, participate
                by adding your picture and enter a challenge with other people
              </p>
              <Link
                to={"login"}
                className="rounded-sm bg-white/60 px-5 py-1 backdrop-blur-sm"
              >
                Participate Now
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default RootPage;
