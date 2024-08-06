import { useMutation, useQuery } from "@tanstack/react-query";
import { User } from "../util/types";
import { fetchIncOnlineWins, fetchUsers } from "../util/http";
import { useEffect } from "react";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import BarChart from "../components/BarChart";

type props = {
  winner: User;
};

const OnlineResultPage = ({ winner }: props) => {
  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: () => {
      return fetchIncOnlineWins(winner._id);
    },
  });

  const { data, isPending: dataPending } = useQuery({
    queryKey: ["wins"],
    queryFn: fetchUsers,
    enabled: isSuccess,
  });

  useEffect(() => {
    mutate();
  }, []);

  if (isPending || dataPending)
    return <Loading msg="its loading..." position="middle" />;

  if (isError || !data)
    return <ErrorMessage msg="something went wrong" position="middle" />;

  return (
    <div className="px-2 pt-10 space-y-10">
      <h1 className="text-center text-lg pb-10">
        <span className="text-yellow-500 font-bold">{winner.name}'s</span> Picture is the Winner</h1>
        <h2 className="text-center text-lg">Top Five Winners</h2>
      <BarChart onlineUsers={data} />
    </div>
  );
};

export default OnlineResultPage;
