import { useState } from "react";
import { shuffle } from "../util/helpers";
import { useAppDispatch } from "../app/store";
import { incFatima, incMohamed, zeroingScore } from "../app/store/scoreSlice";
import challengeData from "../assets/data/challenge";
import ChallengeResultPage from "./ChallengeResult";

let firstRender = false;

const ChallengePage = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const dispatch = useAppDispatch();
  if (!firstRender) {
    shuffle(challengeData);
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

  const endOfChallenge = currentIndex === challengeData.length;

  if (endOfChallenge) {
    return <ChallengeResultPage />;
  }

  return (
    <>
      {challengeData.map((person, index) => {
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

export default ChallengePage;
