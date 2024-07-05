import { Link } from "react-router-dom";
import unauthUser from "../assets/images/user-unauth.svg";
import authUser from "../assets/images/user-auth.svg";
const Nav = () => {
  const condition = false;
  return (
    <nav className="flex justify-between pe-2">
      <button className="clip flex size-20 bg-rose-600 p-3 font-semibold text-white">
        EN
      </button>
      <Link to={""} className="w-20 pt-0.5">
        <img src={condition ? authUser : unauthUser} className="" alt="" />
      </Link>
    </nav>
  );
};

export default Nav;
