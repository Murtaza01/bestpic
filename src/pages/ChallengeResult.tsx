import { useAppSelector } from "../app/store";
import { fetchChallengers, fetchUpdateUserWins } from "../util/http";
import PieChart from "../components/PieChart";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const ChallengeResultPage = () => {
  const { mohamedScore } = useAppSelector((state) => state);
  const { fatimaScore } = useAppSelector((state) => state);
  const {
    data: challengeData,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["challengers"],
    queryFn: fetchChallengers,
  });

  const { mutate, isSuccess } = useMutation({
    mutationFn: (name: string) => {
      return fetchUpdateUserWins(name);
    },
  });

  // to reuse in this component
  const fatimaWon = fatimaScore > mohamedScore;
  const mohamedWon = mohamedScore > fatimaScore;

  useEffect(() => {
    if (fatimaWon) mutate("fatima");
    else if (mohamedWon) mutate("mohamed");
    else mutate("tie");
  }, []);

  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-5">
      <h1 className="text-4xl">
        {fatimaWon ? "Fatima Won" : mohamedWon ? "Mohamed Won" : "Its a Tie"}
      </h1>
      {isPending && <h1>Loading...</h1>}
      {isError && <h1>Failed to get the results, please try again</h1>}
      {challengeData && isSuccess && <PieChart challengeData={challengeData} />}
    </div>
  );
};

export default ChallengeResultPage;
