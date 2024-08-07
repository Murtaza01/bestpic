import { Link } from "react-router-dom";
import { useAppSelector } from "../store";



const Nav = () => {
  const token = useAppSelector(state=>state.token.value)
  return (
    <nav className="fixed top-0 z-20 w-full text-neutral-800 backdrop-blur-[2px]">
      <ul className="flex items-center gap-8 px-2 font-mono font-bold">
        <li className="flex-1 text-2xl">Bestpic.</li>

        <li>
          <Link to={"login"} className="text-lg">
            {token ? "Profile":"Login" }
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
