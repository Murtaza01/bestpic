import { Link } from "react-router-dom";
import user from "../assets/images/user-unauth.svg";
const Nav = () => {
  return (
    <nav className="flex justify-between pe-2">
      <button className="clip flex size-16 bg-rose-600 p-2 text-white">
        EN
      </button>
      <Link to={"login"} className="w-16 pt-0.5">
        <img src={user} className="" alt="" />
      </Link>
    </nav>
  );
};

export default Nav;
