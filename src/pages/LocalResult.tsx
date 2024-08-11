import { useAppSelector } from "../store";
import { fetchLocalUsers, fetchIncLocalWins } from "../util/http";
import PieChart from "../components/PieChart";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import mohamedIcon from "../assets/images/mohamed.png";
import fatimaIcon from "../assets/images/fatima.png";

const LocalResultPage = () => {
  const mohamedScore = useAppSelector((state) => state.score.mohamed);
  const fatimaScore = useAppSelector((state) => state.score.fatima);
  const fatimaWon = fatimaScore > mohamedScore;
  const mohamedWon = mohamedScore > fatimaScore;

  const { mutate, isSuccess, isPending, isError } = useMutation({
    mutationFn: (name: string) => {
      return fetchIncLocalWins(name);
    },
  });

  useEffect(() => {
    if (fatimaWon) mutate("fatima");
    else if (mohamedWon) mutate("mohamed");
    else mutate("tie");
  }, []);

  const { data } = useQuery({
    queryKey: ["localUsers"],
    queryFn: fetchLocalUsers,
    // won't run unless the mutate finishes
    enabled: isSuccess,
  });


  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5">
      <h1 className="mt-20 text-4xl">
        {fatimaWon ? "Fatima Won" : mohamedWon ? "Mohamed Won" : "Its a Tie"}
      </h1>
      <img
        src={mohamedWon ? mohamedIcon : fatimaWon ? fatimaIcon : ""}
        alt=""
        className="w-20"
      />
      {isPending ? (
        <Loading
          msg="Please wait while loading Result"
          position="centred -translate-y-12 gap-3"
        />
      ) : isError ? (
        <ErrorMessage
          msg="Failed to get the results, please try again later"
          position="centred -translate-y-12"
        />
      ) : data ? (
        <PieChart localUsers={data} />
      ): undefined}
    </div>
  );
};

export default LocalResultPage;
