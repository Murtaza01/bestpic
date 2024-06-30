import { Link } from "react-router-dom";
import Hero from "../layout/Hero";
const RootPage = () => {
  return (
    <div>
      <Link to={"/login"}>RootPage</Link>
      <Hero />
    </div>
  );
};

export default RootPage;
