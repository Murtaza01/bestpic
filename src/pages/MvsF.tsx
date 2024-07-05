import { useState } from "react";
import mfData from "../assets/data/mf";
import { shuffle } from "../util/helpers";
import { mfActions } from "../app/store";
import { useAppDispatch, useAppSelector } from "../app/store";

const MvsFPage = () => {
  const [index, setIndex] = useState<number>(0);
  const { mohamed, fatima } = mfData;
  const dispatch = useAppDispatch();
  // const { score: mohamedScore } = useAppSelector((state) => state.mohamed);
  const { score: fatimaScore } = useAppSelector((state) => state.fatima);

  // shows random order of images
  const isEven = Math.floor(Math.random() * index) % 2 === 0;

  shuffle(mohamed);
  shuffle(fatima);

  function handleClick() {
    dispatch(mfActions.addToFatima());
    console.log(fatimaScore);

    setIndex((prev) => prev + 1);
  }

  const show = index === mohamed.length;

  if (show) {
    return (
      <h1 className="grid h-dvh place-items-center text-4xl">
        Fatima: ({fatimaScore})
      </h1>
    );
  }

  return (
    <>
      <div
        className={`flex h-dvh ${isEven ? "flex-col" : "flex-col-reverse"} justify-center *:cursor-pointer`}
      >
        <img src={mohamed[index]} alt="" />
        <img src={fatima[index]} alt="" onClick={handleClick} />
      </div>
    </>
  );
};

export default MvsFPage;