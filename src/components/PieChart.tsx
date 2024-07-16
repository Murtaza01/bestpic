import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Legend, Title, Tooltip } from "chart.js";
import { capitalize } from "../util/helpers";
import { challengers } from "../util/types";

Chart.register(ArcElement, Legend, Tooltip, Title);

type props = {
  challengers: challengers[];
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
const PieChart = ({ challengers }: props) => {
  const data = {
    labels: challengers.map((challenger) => capitalize(challenger.name)),
    datasets: [
      {
        label: " Wins",
        data: challengers.map((challenger) => challenger.wins),
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
