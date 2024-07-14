import From from "../components/Form";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <div className="loginBg flex h-dvh flex-col font-mono font-bold text-white">
      <Link to={".."} className="w-max py-2 ps-3">
        Back
      </Link>
      <From />
    </div>
  );
};

export default LoginPage;
