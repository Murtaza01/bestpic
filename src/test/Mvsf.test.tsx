type resultObj = {
  mohamed: {
    score: number;
    won: number;
  };
  fatima: {
    score: number;
    won: number;
  };
};

const [result, setResult] = useState<resultObj>({
  mohamed: {
    score: 0,
    won: 0,
  },
  fatima: {
    score: 0,
    won: 0,
  },
});

function handleClick(name: string) {
  console.log(name);
  setIndex((prev) => prev + 1);
  setResult((prev) => {
    const oldResult = prev[name as keyof resultObj];
    return {
      ...prev,
      [name]: {
        ...oldResult,
        score: oldResult.score + 1,
      },
    };
  });
}
// console.log();
const show = index === mohamed.length;

if (show) {
  setResult((prev) => {
    const fatimaScore = prev.fatima.score;
    // const mohamedScore = prev.mohamed.score;

    return {
      ...prev,
      ["fatima" as keyof resultObj]: {
        score: fatimaScore,
        won: prev.fatima.won + 1,
      },
    };
  });
  console.log(result.fatima.won);

  return <h2>{result.fatima.won}</h2>;
}
