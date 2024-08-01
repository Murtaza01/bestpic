import { useAppSelector } from "../store";
import { fetchLocalUsers, fetchUpdateUserWins } from "../util/http";
import PieChart from "../components/PieChart";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";

const ChallengeResultPage = () => {
  const mohamedScore = useAppSelector((state) => state.score.mohamed);
  const fatimaScore = useAppSelector((state) => state.score.fatima);
  const { mutate, isSuccess } = useMutation({
    mutationFn: (name: string) => {
      return fetchUpdateUserWins(name);
    },
  });

  const {
    data,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["localUsers"],
    queryFn: fetchLocalUsers,
    // won't run unless the mutate finishes 
    enabled: isSuccess
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
        <Loading msg="Please wait while loading Result" />
      ) : isError ? (
        <Error msg="Failed to get the results, please try again" />
      ) : (
        <PieChart localUsers={data} />
      )}
    </div>
  );
};

export default ChallengeResultPage;
