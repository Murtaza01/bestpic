// localUser
export type Challenge = {
  _id: string;
  name: string;
  mvsf: {
    mohamedWins: number;
    fatimaWins: number;
    tie: number;
  };
}[];

// onlineUser
export type User = {
  _id:string
  name: string;
  imageUrl: string;
  imageId: string;
}

export const user = {
  _id: '',
  name: '',
  imageUrl: '',
  imageId: '',
}