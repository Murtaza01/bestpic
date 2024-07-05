import { useState } from "react";
import mfData from "../assets/data/mf";
import { shuffle } from "../util/helpers";

const MvsFPage = () => {
  const [index, setIndex] = useState<number>(0);

  const { mohamed, fatima } = mfData;

  // shows random order of images
  const isEven = Math.floor(Math.random() * index) % 2 === 0;

  shuffle(mohamed);
  shuffle(fatima);

  function handleClick(name: any) {
    console.log(name);
    setIndex((prev) => prev + 1);
  }

  return (
    <div
      className={`flex h-dvh ${isEven ? "flex-col" : "flex-col-reverse"} justify-center *:cursor-pointer`}
    >
      <img src={mohamed[index]} alt="" onClick={() => handleClick("mohamed")} />
      <img src={fatima[index]} alt="" onClick={() => handleClick("fatima")} />
    </div>
  );
};

export default MvsFPage;
