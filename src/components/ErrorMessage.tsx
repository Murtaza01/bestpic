import { FaXmark } from "react-icons/fa6";

type props = {
  msg: string;
  position: string;
};

const ErrorMessage = ({ msg, position }: props) => {

  const isMiddle = position === "middle" && "grid h-screen mx-auto place-content-center"
  return (
    <div className={`${isMiddle ? isMiddle : position} max-w-96 px-2`}>
      <div className="flex items-center justify-center gap-3 rounded-sm bg-red-500 px-4 py-3 font-sans font-normal text-white">
        <FaXmark className="text-xl" />
        <p>{msg}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
