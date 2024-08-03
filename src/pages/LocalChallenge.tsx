import { useState } from "react";
import { shuffle } from "../util/helpers";
import { useAppDispatch } from "../store";
import { incFatima, incMohamed, zeroingScore } from "../store/scoreSlice";
import { localImages } from "../assets/data/localChallenge";
import LocalResultPage from "./LocalResult";

let firstRender = false;

const LocalChallengePage = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const dispatch = useAppDispatch();

  if (!firstRender) {
    shuffle(localImages);
    firstRender = true;
  }
  // if back score = 0
  window.onpopstate = () => {
    dispatch(zeroingScore());
  };

  function handleClick(id: string) {
    if (id === "mohamed") {
      dispatch(incMohamed());
    } else if (id === "fatima") {
      dispatch(incFatima());
    }
    setTimeout(() => setCurrentIndex((prev) => prev + 1), 300);
  }

  const endOfChallenge = currentIndex === localImages.length;

  if (endOfChallenge) {
    return <LocalResultPage />
  }

  return (
    <>
      {localImages.map((person, index) => {
        if (currentIndex === index) {
          return (
            <div key={index} className="h-dvh">
              {person.map(({ image, id }) => {
                return (
                  <img
                    key={id}
                    src={image}
                    className="h-[50%] w-full cursor-pointer border-red-600 object-cover transition-all first:border-b-4 active:brightness-150 active:saturate-150"
                    alt=""
                    onClick={() => handleClick(id)}
                  />
                );
              })}
            </div>
          );
        }
      })}
    </>
  );
};

export default LocalChallengePage;
