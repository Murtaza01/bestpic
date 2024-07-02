import { Link } from "react-router-dom";
import camera from "../assets/images/camera1.svg";
const Nav = () => {
  return (
    <nav className="relative grid h-14 place-content-center">
      <button className="clip absolute left-0 flex size-16 bg-yellow-300 p-2">
        EN
      </button>
      <Link to={"/"} className="flex items-center pt-5">
        <img src={camera} className="w-32" alt="" />
      </Link>
    </nav>
  );
};

export default Nav;
