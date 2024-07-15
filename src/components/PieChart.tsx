import { Pie } from "react-chartjs-2";
import { Chart as Chartjs, ArcElement, Legend, Title, Tooltip } from "chart.js";
import { capitalize } from "../util/helpers";
import { challengers } from "../util/types";
Chartjs.register(ArcElement, Legend, Tooltip, Title);

type props = {
  people: challengers[];
};

const options = {
  plugins: {
    legend: {
      labels: {
        font: {
          size: 20,
          family: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas ",
        },
      },
    },
  },
};
const PieChart = ({ people }: props) => {
  const data = {
    labels: people.map((person) => capitalize(person.name)),
    datasets: [
      {
        label: " Wins",
        data: people.map((person) => person.wins),
        backgroundColor: ["darkslateblue", "darkred"],
        hoverOffset: 6,
      },
    ],
  };
  return (
    <div className="">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
