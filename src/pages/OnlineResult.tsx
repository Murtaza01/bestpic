import { User } from "../util/types";

type props = {
  winner: User;
};
const OnlineResultPage = ({ winner }: props) => {
// TODO: based on the winner, add wins to that user, thats it basically
    console.log(winner);
    
  return <h1>the results</h1>;
};

export default OnlineResultPage;
