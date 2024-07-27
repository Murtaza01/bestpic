import { ReactNode } from "react";

type props = {
  style?: string;
  children: ReactNode;
};

const Box = ({ style, children }: props) => {
  return (
    <div
      className={`${style} flex flex-1 flex-col items-center justify-center`}
    >
      {children}
    </div>
  );
};

export default Box;
