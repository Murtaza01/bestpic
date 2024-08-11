import Nav from "../layout/Nav";
import Hero from "../layout/Hero";
import ChallengeSection from "../components/ChallengeSection";
import sectionsData from "../assets/data/challengeSection";
import Figures from "../components/Figures";
import Footer from "../layout/Footer";
import { MdOutlineGroupAdd } from "react-icons/md";

const RootPage = () => {
  const { local, online } = sectionsData;

  return (
    <>
      <Nav />
      <Hero />
      <div id="challenges" className="space-y-10 py-10">
        <ChallengeSection path="localChallenge">
          {local.map((localData) => (
            <Figures key={localData.id} data={localData} />
          ))}
        </ChallengeSection>
        <ChallengeSection path="onlineChallenge">
          {online.map((onlineData) => (
            <Figures key={onlineData.id} data={onlineData} />
          ))}
        </ChallengeSection>
        <ChallengeSection path="void">
          <figure className="w-20 rounded-full bg-green-400">
            <MdOutlineGroupAdd className="translate-x-1.5 text-[5rem]" />
          </figure>
        </ChallengeSection>
      </div>
      <Footer />
    </>
  );
};

export default RootPage;
