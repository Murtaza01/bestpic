import { ReactNode } from "react";
import { Link } from "react-router-dom";

type props = {
  children: ReactNode;
  path: string;
};

const ChallengeSection = ({ children, path }: props) => {
  return (
    <section className="boxShadow relative mx-auto flex h-72 w-[90vw] flex-col justify-center rounded-lg bg-gray-50 lg:w-[57rem]">
      {path === "onlineChallenge" && <p className="absolute bottom-1 left-2 text-center text-red-600 font-mono font-semibold">*Requires login</p>}
      
      <div className="flex flex-1 items-center justify-center gap-5 rounded-lg md:gap-16 lg:gap-20 ">
        {children}
      </div>
      <Link
        to={path}
        className="mx-auto mb-10 rounded-md bg-neutral-700 px-7 py-0.5 text-xl text-white"
      >
        {path === "" ? "Add" : "Start"}
      </Link>
    </section>
  );
};

export default ChallengeSection;
