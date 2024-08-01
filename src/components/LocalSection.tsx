import { Link } from "react-router-dom";
import { localSection } from "../assets/data/local";

const LocalSection = () => {
  return (
    <div className="mx-auto flex h-72 w-[90%] flex-col justify-center bg-slate-300 rounded-lg">
      <div className="flex flex-1 items-center justify-around rounded-lg">
        {localSection.map(({ name, svg, id }) => (
          <div key={id} className="flex flex-col items-center gap-2">
            <img src={svg} alt="" className={`${id === 2 ? "w-20" : "w-16"}`} />
            <h2>{name}</h2>
          </div>
        ))}
      </div>
      <Link to={""} className="mx-auto mb-10 bg-red-300 px-5 text-xl">
        Start
      </Link>
    </div>
  );
};

export default LocalSection;
