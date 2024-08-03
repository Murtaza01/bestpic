import Nav from "../layout/Nav";
import Hero from "../layout/Hero";
import ChallengeSection from "../components/ChallenegeSection";
import sectionsData from "../assets/data/challengeSection";
import Figures from "../components/Figures";


const RootPage = () => {

  const {local,online} = sectionsData
  return (
    <>
      <Nav />
      <Hero />
      <div id="challenges" className="py-10 space-y-10">
      <ChallengeSection path="localChallenge">
        {local.map((localData)=>(
          <Figures key={localData.id} data={...localData}/>
        ))}
      </ChallengeSection>
      <ChallengeSection path="">
        {online.map((onlineData)=>(
          <Figures key={onlineData.id} data={...onlineData}/>
        ))}
      </ChallengeSection>
      </div>
    </>
  );
};

export default RootPage;
