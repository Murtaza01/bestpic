import { useAppSelector } from "../store";
import { fetchChallengers, fetchUpdateUserWins } from "../util/http";
import PieChart from "../components/PieChart";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import Loader from "../components/Loader";
import Error from "../components/Error";

const ChallengeResultPage = () => {
  const mohamedScore = useAppSelector((state) => state.score.mohamed);
  const fatimaScore = useAppSelector((state) => state.score.fatima);
  const {
    data: challengeData,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["challengers"],
    queryFn: fetchChallengers,
  });

  // handle mutate loading and error
  const { mutate } = useMutation({
    mutationFn: (name: string) => {
      return fetchUpdateUserWins(name);
    },
  });

  const fatimaWon = fatimaScore > mohamedScore;
  const mohamedWon = mohamedScore > fatimaScore;

  useEffect(() => {
    if (fatimaWon) mutate("fatima");
    else if (mohamedWon) mutate("mohamed");
    else mutate("tie");
  }, []);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5">
      <h1 className="mt-20 text-4xl">
        {fatimaWon ? "Fatima Won" : mohamedWon ? "Mohamed Won" : "Its a Tie"}
      </h1>
      {isPending ? (
        <Loader msg="Please wait while loading Result" />
      ) : isError ? (
        <Error msg="Failed to get the results, please try again" />
      ) : (
        <PieChart challengeData={challengeData} />
      )}
    </div>
  );
};

export default ChallengeResultPage;
