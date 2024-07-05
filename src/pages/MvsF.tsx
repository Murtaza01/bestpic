import { useState } from "react";
import mfData from "../assets/data/mf";
import { shuffle } from "../util/helpers";
import { mfActions } from "../app/store";
import { useAppDispatch, useAppSelector } from "../app/store";

const MvsFPage = () => {
  const [index, setIndex] = useState<number>(0);
  const { mohamed, fatima } = mfData;
  const dispatch = useAppDispatch();
  const { score } = useAppSelector((state) => state.fatima);

  // shows random order of images
  const isEven = Math.floor(Math.random() * index) % 2 === 0;

  shuffle(mohamed);
  shuffle(fatima);

  function handleClick() {
    dispatch(mfActions.addToFatima());
    setIndex((prev) => prev + 1);
    console.log(score);
  }

  const show = index === mohamed.length;

  if (show) {
    return <h1>hi</h1>;
  }

  return (
    <>
      <div
        className={`flex h-dvh ${isEven ? "flex-col" : "flex-col-reverse"} justify-center *:cursor-pointer`}
      >
        <img src={mohamed[index]} alt="" onClick={handleClick} />
        <img src={fatima[index]} alt="" />
      </div>
    </>
  );
};

export default MvsFPage;
