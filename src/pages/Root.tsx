import { Link } from "react-router-dom";

const RootPage = () => {
  return (
    <div>
      <Link to={"/login"}>RootPage</Link>
    </div>
  );
};

export default RootPage;
