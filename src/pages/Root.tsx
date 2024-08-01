import Nav from "../layout/Nav";
import Hero from "../layout/Hero";
import { Link } from "react-router-dom";
import { GiNurseFemale } from "react-icons/gi";
const mohamedVsfatima = ["Mohamed", "", "Fatima"]
// make this an object in the data folder and add images/svg
const RootPage = () => {
  return (
    <>
      <Nav />
      <Hero />
      <section id="challenges" className="flex flex-col justify-center my-10 h-72 w-[80%] mx-auto bg-slate-300 ">

        <div className="flex flex-1 items-center  justify-around rounded-lg">
          {mohamedVsfatima.map((item) => (
            <div className="flex  flex-col items-center">
              <span><GiNurseFemale className="text-5xl" /></span>
              <h2>{item}</h2>
            </div>
          ))}
        </div>
        <Link to={''} className="mb-10 mx-auto bg-red-300 px-5 text-xl">Start</Link>
      </section>
    </>
  );
};

export default RootPage;
