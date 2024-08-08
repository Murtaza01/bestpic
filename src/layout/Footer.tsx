import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center h-28 flex-col gap-5 bg-black text-white">
        <ul className="flex justify-center items-center gap-4 text-3xl">
          <li>
            <a
              href="https://www.instagram.com/murtaza_alkabie/"
              target={"_blank"}
              className="text-red-400 hover:brightness-50"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://t.me/murtaza_alkabie"
              target={"_blank"}
              className="text-sky-500 hover:brightness-50"
            >
              <FaTelegramPlane />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Murtaza01"
              target={"_blank"}
              className="text-slate-500 hover:brightness-50"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      <p className="text-lg capitalize">
        all copyRights @ goes to{" "}
        <span className=" text-lg font-semibold italic text-yellow-500">
          Birdman.
        </span>{" "}
      </p>
    </footer>
  );
};

export default Footer;
