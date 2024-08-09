import { useState } from "react";
import { shuffle } from "../util/helpers";
import { useAppDispatch } from "../store";
import { incFatima, incMohamed, zeroingScore } from "../store/scoreSlice";
import { localImages } from "../assets/data/localChallenge";
import LocalResultPage from "./LocalResult";

let firstRender = false;

const LocalChallengePage = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [pickedImg, setPickedImg] = useState<string>();
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

  function handleClick(id: string, index: number) {
    if (index === 0) setWidth("first:w-[92%] last:w-[8%]");
    else if (index === 1) setWidth("last:w-[92%] first:w-[8%]");
    setPickedImg(id);
  }

  function handleSubmit() {
    if (pickedImg === "mohamed") {
      dispatch(incMohamed());
    } else if (pickedImg === "fatima") {
      dispatch(incFatima());
    }
    setCurrentIndex((prev) => prev + 1);
    setWidth("")
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
              {person.map(({ image, id }, index) => {
                return (
                  <>
                    <img
                      key={id}
                      src={image}
                      className={`${width ? width : "w-[50%]"} cursor-pointer border-yellow-500 object-cover transition-all duration-500 first:border-r-2 active:brightness-150 active:saturate-150`}
                      onClick={() => handleClick(id, index)}
                    />
                  </>
                );
              })}
            </div>
          );
        }
      })}
      {width && (
        <button
          onClick={handleSubmit}
          className={`absolute bottom-10 font-semibold font-mono z-20 rounded-md bg-white/20 backdrop-blur-sm px-4 py-1 ${
            width.startsWith("first")
              ? "right-[calc(92%-50%)]"
              : "left-[calc(92%-50%)]"
          } `}
        >
          Pick Image
        </button>
      )}
    </div>
  );
};

export default LocalChallengePage;
