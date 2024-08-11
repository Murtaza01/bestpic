import { useState } from "react";
import { shuffle } from "../util/helpers";
import { useAppDispatch } from "../store";
import { incFatima, incMohamed, zeroingScore } from "../store/scoreSlice";
import { localImages } from "../assets/data/localChallenge";
import LocalResultPage from "./LocalResult";
import HeartButton from "../components/HeartButton";

let firstRender = false;

const LocalChallengePage = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [index, setIndex] = useState<number>();
  const [width, setWidth] = useState<string>();
  const dispatch = useAppDispatch();

  if (!firstRender) {
    shuffle(localImages);
    firstRender = true;
  }
  // if back score = 0
  window.onpopstate = () => {
    dispatch(zeroingScore());
  };

  function handleClick(i: number) {
    if (i === 0) setWidth("first:w-[92%] last:w-[8%]");
    else if (i === 1) setWidth("last:w-[92%] first:w-[8%]");
    setIndex(i);
  }

  function handleSubmit() {
    //accessing a nested array to get the id
    const id = localImages[currentIndex][index as number].id;

    if (id === "mohamed") {
      dispatch(incMohamed());
    } else if (id === "fatima") {
      dispatch(incFatima());
    }
    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
      setWidth("");
    }, 1100);
  }
  const endOfChallenge = currentIndex === localImages.length;

  if (endOfChallenge) {
    return <LocalResultPage />;
  }

  return (
    <div className="relative">
      {localImages.map((person, index) => {
        if (currentIndex === index) {
          return (
            <div key={index} className="flex h-screen">
              {person.map(({ image, id }, i) => {
                return (
                  <img
                    key={id}
                    src={image}
                    className={`${width ? width : "w-[50%]"} object-cover transition-all duration-300 active:brightness-50 active:saturate-50`}
                    onClick={() => handleClick(i)}
                  />
                );
              })}
            </div>
          );
        }
      })}
      {width && (
        <HeartButton
          onSubmit={handleSubmit}
          style={`absolute bottom-10 z-20 ${
            width.startsWith("first")
              ? "right-[calc(50%-3rem)] "
              : "left-[calc(50%-3rem)]"
          }`}
        />
      )}
    </div>
  );
};

export default LocalChallengePage;
