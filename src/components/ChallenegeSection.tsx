import { ReactNode } from "react";
import { Link } from "react-router-dom";

type props = {
    children:ReactNode
    path:string
}

const ChallengeSection = ({children,path}:props) => {
  return (
    <section className="challengeSection">
      <div className="flex flex-1 items-center justify-center gap-5 rounded-lg">
        {children}
      </div>
      <Link
        to={path}
        className="mx-auto mb-10 bg-neutral-700  text-white px-7 rounded-md py-0.5 text-xl"
      >
        Start
      </Link>
    </section>
  );
};

export default ChallengeSection;
