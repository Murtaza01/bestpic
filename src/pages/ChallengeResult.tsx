// import { useEffect, useState } from "react";
import { useAppSelector } from "../app/store";
import { fetchChallengers, fetchUpdateUserWins } from "../util/http";
import PieChart from "../components/PieChart";
// import { challengers } from "../util/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const ChallengeResultPage = () => {
  const { score: mohamedScore } = useAppSelector((state) => state.mohamed);
  const { score: fatimaScore } = useAppSelector((state) => state.fatima);
  const {
    data: challengers,
    error,
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

  if (isPending) {
    return (
      <h1 className="grid h-screen place-content-center text-3xl">
        Loading...
      </h1>
    );
  }

  if (isError) {
    return (
      <h1 className="grid h-screen place-content-center text-3xl">
        {error.message}
      </h1>
    );
  }

  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-5">
      <h1 className="text-4xl">
        {fatimaScore > mohamedScore ? "Fatima Won" : "Mohamed Won"}
      </h1>
      {challengers && <PieChart challengers={challengers} />}
    </div>
  );
};

export default ChallengeResultPage;
