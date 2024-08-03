import mohamed from "../images/mohamed.png";
import fatima from "../images/fatima.png";
import swords from "../images/swords.png";
import you from "../images/you.png";
import globe from "../images/globe.png";

const sectionsData = {
  local: [
    {
      id: 1,
      name: "Mohamed",
      svg: mohamed,
      bg: "bg-sky-500",
    },
    {
      id: 2,
      svg: swords,
    },
    {
      id: 3,
      name: "Fatima",
      svg: fatima,
      bg: "bg-rose-500",
    },
  ],
  online: [
    {
      id: 1,
      name: "You",
      svg: you,
    },
    {
      id: 2,
      svg: swords,
    },
    {
      id: 3,
      name: "The World",
      svg: globe,
    },
  ],
};

export default sectionsData