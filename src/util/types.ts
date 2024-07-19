// type of data that comes from backend
export type challenge = {
  _id: string;
  name: string;
  mvsf: {
    mohamedWins: number;
    fatimaWins: number;
    tie: number;
  };
}[];
