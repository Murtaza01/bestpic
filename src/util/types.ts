// type of data that comes from backend
export type Challenge = {
  _id: string;
  name: string;
  mvsf: {
    mohamedWins: number;
    fatimaWins: number;
    tie: number;
  };
}[];

export type LoggedUserData = {
  name:string
  imageUrl:string
}