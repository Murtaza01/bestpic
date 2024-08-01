import Nav from "../layout/Nav";
import Hero from "../layout/Hero";
import LocalSection from "../components/LocalSection";

const RootPage = () => {
  return (
    <>
      <Nav />
      <Hero />
      <section id="challenges" className="py-10 ">
        <LocalSection />
      </section>
    </>
  );
};

export default RootPage;
