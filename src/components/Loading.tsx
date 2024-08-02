import { LuLoader2 } from "react-icons/lu";


type props = {
  msg: string;
};

const Loader = ({ msg }: props) => {
  return (
    <div className="centred -translate-y-16 gap-3">
      <p className="capitalize">{msg}</p>
      <LuLoader2 className="animate-spin text-4xl" />
    </div>
  );
};

export default Loader;
