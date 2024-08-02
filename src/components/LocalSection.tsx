import { Link } from "react-router-dom";
import { localData } from "../assets/data/local";

const LocalSection = () => {
  return (
    <div className=" mx-auto flex h-72 w-[90%] flex-col justify-center rounded-lg bg-gray-50  boxShadow">
      <div className="flex flex-1 items-center justify-center gap-5 rounded-lg">
        {localData.map(({ name, svg, id, bg }) => (
          <div key={id} className="flex flex-col items-center gap-2">
            <figure className={`${bg} max-w-20 px-1 rounded-full pt-1`}>
              <img
                src={svg}
                alt=""
                className={`${id === 2 ? "w-24" : "mx-auto max-w-full drop-shadow-md"}`}
              />
            </figure>
            <h2>{name}</h2>
          </div>
        ))}
      </div>
      <Link
        to={"localChallenge"}
        className="mx-auto mb-10 bg-neutral-700  text-white px-7 rounded-md py-0.5 text-xl"
      >
        Start
      </Link>
    </div>
  );
};

export default LocalSection;
