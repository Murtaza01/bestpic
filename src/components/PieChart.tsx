import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Legend, Title, Tooltip } from "chart.js";
import { capitalize } from "../util/helpers";
import { Challenge} from "../util/types";

Chart.register(ArcElement, Legend, Tooltip, Title);

type props = {
  challengeData: Challenge;
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
const PieChart = ({ challengeData }: props) => {
  const challengers = challengeData[0].mvsf;
  const names = Object.keys(challengers);
  const wins = Object.values(challengers);

  const data = {
    labels: names.map((name) => capitalize(name.replace("Wins", ""))),
    datasets: [
      {
        label: " Wins",
        data: wins.map((win) => win),
        backgroundColor: ["darkslateblue", "darkred", "gray"],
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
