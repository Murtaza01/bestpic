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
}

export const user = {
  _id: '',
  name: '',
  imageUrl: '',
  imageId: '',
}