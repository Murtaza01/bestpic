import { useState } from "react";

type props = {
  style: string;
  onSubmit: () => void;
};

const HeartButton = ({ style, onSubmit }: props) => {
  const [animate, setAnimate] = useState<boolean>(false);

  function handleClick() {
    setAnimate(true);
    onSubmit();
  }
  return (
    <button
      onClick={handleClick}
      className={`${animate ? "heartAnimation" : ""} heart size-32 ${style}`}
    ></button>
  );
};

export default HeartButton;
