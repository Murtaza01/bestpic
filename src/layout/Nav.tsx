import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [lang, setLang] = useState("Ar");
  return (
    <nav className="fixed top-0 z-20 w-full backdrop-blur-[2px]">
      <ul className="flex items-center gap-8 px-2 font-mono font-bold">
        <li className="flex-1 text-2xl">Bestpic.</li>
        <li className="">
          <button
            onClick={() => setLang("Ar")}
            className={`${lang === "Ar" && "text-yellow-500"}`}
          >
            AR
          </button>{" "}
          /{" "}
          <button
            onClick={() => setLang("En")}
            className={`${lang === "En" && "text-yellow-500"} `}
          >
            EN
          </button>
        </li>
        <li>
          <Link to={"login"} className="text-lg">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
