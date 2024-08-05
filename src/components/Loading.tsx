import { LuLoader2 } from "react-icons/lu";


type props = {
  msg: string;
  position:string
};
const Loading = ({ msg,position }: props) => {

  const isMiddle = position === "middle" && "grid h-screen gap-3 place-items-center place-content-center"
  return (
    <div className={`${isMiddle ? isMiddle : position} `}>
      <p className="capitalize">{msg}</p>
      <LuLoader2 className="animate-spin text-4xl" />
    </div>
  );
};

export default Loading;
