import Nav from "../layout/Nav";
import Hero from "../layout/Hero";
const RootPage = () => {
  return (
    <>
      <Nav />
      <Hero />
      <section className="mx-10 my-10 h-[50rem]">
        <div className="grid aspect-square place-items-center bg-red-300">
          <h1>Hello world</h1>
        </div>
      </section>
    </>
  );
};

export default RootPage;
