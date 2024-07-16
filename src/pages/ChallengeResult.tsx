// import { useEffect, useState } from "react";
import { useAppSelector } from "../app/store";
import { fetchChallengers } from "../util/http";
import PieChart from "../components/PieChart";
import { challengers } from "../util/types";
import { useQuery } from "@tanstack/react-query";

const ChallengeResultPage = () => {
  const { data, error, isPending, isError } = useQuery({
    queryKey: ["challengers"],
    queryFn: fetchChallengers,
  });
  // todo: add useQuery to handle the result of challenge
  // const [challengers, setChallengers] = useState<challengers[] | undefined>();
  const { score: mohamedScore } = useAppSelector((state) => state.mohamed);
  const { score: fatimaScore } = useAppSelector((state) => state.fatima);

  // useEffect(() => {
  //   (async () => {
  //     if (fatimaScore > mohamedScore) {
  //       const result = await fetchUpdateUserWins("fatima");
  //       console.log(result);
  //     } else if (mohamedScore > fatimaScore) {
  //       const result = await fetchUpdateUserWins("mohamed");
  //       console.log(result);
  //     }
  //     const result = await fetchChallengers();
  //     if (result !== "Failed to fetch") setChallengers(result);
  //   })();
  // }, []);

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
  console.log(isError, isPending, data);

  const challengers: challengers[] = data;
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
