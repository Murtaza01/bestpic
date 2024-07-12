import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Nav = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  function languageHandler(lang: string) {
    i18n.changeLanguage(lang);
  }
  console.log(currentLang, i18n.dir());

  return (
    <nav className="fixed top-0 z-20 w-full backdrop-blur-[2px]">
      <ul className="flex items-center gap-8 px-2 font-mono font-bold">
        <li className="flex-1 text-2xl">Bestpic.</li>
        <li className="">
          <button
            onClick={() => languageHandler("ar")}
            className={`${currentLang === "ar" && "text-yellow-500"}`}
          >
            AR
          </button>{" "}
          /{" "}
          <button
            onClick={() => languageHandler("en")}
            className={`${currentLang === "en" && "text-yellow-500"} `}
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
