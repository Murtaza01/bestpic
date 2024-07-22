import From from "../components/Form";
import { Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";

const LoginPage = () => {
  return (
    <div className="loginBg flex h-screen flex-col font-mono font-bold text-white">
      <Link to={".."} className="w-max px-2 py-1">
        <MdKeyboardBackspace className="text-4xl text-black" />
      </Link>
      <From />
    </div>
  );
};

export default LoginPage;
