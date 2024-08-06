import {
  BarController,
  BarElement,
  Chart,
} from "chart.js";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { User } from "../util/types";

Chart.register(BarController, BarElement);

type props = {
  onlineUsers: User[];
};

const BarChart = ({ onlineUsers }: props) => {
  // 4,3,2,1...
  const usersAscending = onlineUsers.sort((a, b) => a.wins - b.wins).reverse();

  

  const data = {
    labels: usersAscending.slice(-5).map(({ name }) => name),
    datasets: [
      {
        label: "Wins",
        data: usersAscending.slice(-5).map(({ wins }) => wins),
        backgroundColor: ["red", "yellow", "green", "orange","blue"],

      },
    ],
  };

  return (
    <>
      <Bar data={data} />
    </>
  );
};

export default BarChart;
