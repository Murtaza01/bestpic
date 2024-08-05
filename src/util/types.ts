// localUser
export type LocalUsers = {
  _id: string;
  name: string;
  mohamedANDfatima: {
    mohamed: number;
    fatima: number;
    tie: number;
  };
}[];

// onlineUser
export type User = {
  _id:string
  name: string;
  imageUrl: string;
  imageId: string;
  wins:number;
}

export const user = {
  _id: '',
  name: '',
  imageUrl: '',
  imageId: '',
  wins:0
}