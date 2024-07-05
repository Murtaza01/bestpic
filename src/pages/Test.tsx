import Nav from "../layout/Nav";
import Hero from "../layout/Hero";
// import Slider from "../components/Slider";
import { Link, Outlet } from "react-router-dom";
const Test = () => {
  return (
    <>
      <main className="rootBg flex h-dvh flex-col gap-12 pb-5 text-white">
        <Nav />
        <Hero />
        {/* <Slider /> */}
      </main>
      <Link to={"mohamed-vs-fatima"}>
        <div className="mx-auto my-10 h-80 w-96 bg-green-500"></div>
      </Link>
      <Outlet />
    </>
  );
};

export default Test;
