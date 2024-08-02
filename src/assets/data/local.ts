import blueCar from "../images/blueCar.jpg";
import oldMan from "../images/oldMan.jpg";
import niceView from "../images/niceView.jpg";
import roman from "../images/roman.jpg";
import doorView from "../images/doorView.jpg";
import books from "../images/books.jpg";
import mohamed from "../images/mohamed.png"
import fatima from "../images/fatima.png"
import swords from "../images/swords.png"


export const localImages = [
  [
    {
      image: blueCar,
      id: "mohamed",
    },
    {
      image: oldMan,
      id: "fatima",
    },
  ],
  [
    {
      image: niceView,
      id: "fatima",
    },
    {
      image: roman,
      id: "mohamed",
    },
  ],
  [
    {
      image: blueCar,
      id: "fatima",
    },
    {
      image: oldMan,
      id: "mohamed",
    },
  ],
  [
    {
      image: doorView,
      id: "fatima",
    },
    {
      image: books,
      id: "mohamed",
    },
  ],
];

export const localData = [
  {
    id:1,
    name:"Mohamed",
    svg:mohamed,
    bg:"bg-sky-500"
  },
  {
    id:2,
    svg:swords,

  },
  {
    id:3,
    name:"Fatima",
    svg:fatima,
    bg:"bg-rose-500"
  }
]
