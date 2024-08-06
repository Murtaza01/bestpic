import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Legend, Title, Tooltip } from "chart.js";
import { capitalize } from "../util/helpers";
import { LocalUsers } from "../util/types";

Chart.register(ArcElement, Legend, Tooltip, Title);

type props = {
  localUsers: LocalUsers;
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
const PieChart = ({ localUsers }: props) => {
  
  const mohamedANDfatima = localUsers[0].mohamedANDfatima;

  const names = Object.keys(mohamedANDfatima);
  const wins = Object.values(mohamedANDfatima);

  const data = {
    labels: names.map((name) => capitalize(name.replace("Wins", ""))),
    datasets: [
      {
        label: " Wins",
        data: wins.map((win) => win),
        backgroundColor: ["#0ea5e9", "#f43f5e", "#a1a1aa"],
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
