import { BiError } from "react-icons/bi";

type props = {
  msg: string;
};

const ErrorMessage = ({ msg }: props) => {
  return (
    <div className="centred -translate-y-16">
      <div className="flex items-center justify-between gap-2 rounded-sm bg-gray-200 px-4 py-2 font-semibold">
        <BiError className="text-2xl text-yellow-400" />
        <p>{msg}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
