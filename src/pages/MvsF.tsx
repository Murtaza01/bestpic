import { useState } from "react";
import mfData from "../assets/data/mf";
import { shuffle } from "../util/helpers";
import { mfActions } from "../app/store";
import { useAppDispatch, useAppSelector } from "../app/store";

let firstRender = false;

const MvsFPage = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const dispatch = useAppDispatch();
  const { score: mohamedScore } = useAppSelector((state) => state.mohamed);
  const { score: fatimaScore } = useAppSelector((state) => state.fatima);

  if (!firstRender) {
    shuffle(mfData);
    firstRender = true;
  }
  // if back score = 0
  window.onpopstate = () => {
    dispatch(mfActions.zeroingScore());
  };

  function handleClick(id: string) {
    if (id === "mohamed") {
      dispatch(mfActions.addToMohamed());
    } else if (id === "fatima") {
      dispatch(mfActions.addToFatima());
    }
    setTimeout(() => setCurrentIndex((prev) => prev + 1), 300);
  }

  const show = currentIndex === mfData.length;

  if (show) {
    return (
      <h1 className="grid h-dvh place-items-center text-4xl">
        Fatima: ({fatimaScore}) mohamed: ({mohamedScore})
      </h1>
    );
  }

  return (
    <>
      {mfData.map((person, index) => {
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

export default MvsFPage;
