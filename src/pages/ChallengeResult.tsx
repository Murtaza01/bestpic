import { useEffect, useState } from "react";
import { useAppSelector } from "../app/store";
import { fetchChallengers, fetchUpdateUserWins } from "../util/http";
import PieChart from "../components/PieChart";
import { challengers } from "../util/types";

const ChallengeResultPage = () => {
  // todo: add useQuery to handle the result of challenge
  const [challengers, setChallengers] = useState<challengers[] | undefined>();
  const { score: mohamedScore } = useAppSelector((state) => state.mohamed);
  const { score: fatimaScore } = useAppSelector((state) => state.fatima);

  useEffect(() => {
    (async () => {
      if (fatimaScore > mohamedScore) {
        const result = await fetchUpdateUserWins("fatima");
        console.log(result);
      } else if (mohamedScore > fatimaScore) {
        const result = await fetchUpdateUserWins("mohamed");
        console.log(result);
      }
      const result = await fetchChallengers();
      if (result !== "Failed to fetch") setChallengers(result);
    })();
  }, []);

  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-5">
      <h1 className="text-4xl">
        {fatimaScore > mohamedScore ? "Fatima Won" : "Mohamed Won"}
      </h1>
      {challengers && <PieChart people={challengers} />}
    </div>
  );
};

export default ChallengeResultPage;
