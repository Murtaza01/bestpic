import { LuLoader2 } from "react-icons/lu";


type props = {
  msg: string;
  position:string
};
const Loading = ({ msg,position }: props) => {
  return (
    <div className={`${position} `}>
      <p className="capitalize">{msg}</p>
      <LuLoader2 className="animate-spin text-4xl" />
    </div>
  );
};

export default Loading;
