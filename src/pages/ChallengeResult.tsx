import { useAppSelector } from "../app/store";
import { fetchChallengers, fetchUpdateUserWins } from "../util/http";
import PieChart from "../components/PieChart";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const ChallengeResultPage = () => {
  const { mohamedScore } = useAppSelector((state) => state);
  const { fatimaScore } = useAppSelector((state) => state);
  const {
    data: challengers,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["challengers"],
    queryFn: fetchChallengers,
  });

  const { mutate } = useMutation({
    mutationFn: (name: string) => {
      return fetchUpdateUserWins(name);
    },
  });

  useEffect(() => {
    if (fatimaScore > mohamedScore) mutate("fatima");
    if (mohamedScore > fatimaScore) mutate("mohamed");
  }, []);
  // handle tie
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-5">
      <h1 className="text-4xl">
        {fatimaScore > mohamedScore ? "Fatima Won" : "Mohamed Won"}
      </h1>
      {isPending && <h1>Loading...</h1>}
      {isError && <h1>Failed to get the results, please try again</h1>}
      {challengers && <PieChart challengers={challengers} />}
    </div>
  );
};

export default ChallengeResultPage;
