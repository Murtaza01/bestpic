import pic from "../assets/pic.jpg";
import HeroImages from "../components/HeroImages";

const Hero = () => {
  return (
    <main>
      <div className="relative h-[70dvh] space-y-2 overflow-hidden border-b border-black p-24 text-center">
        <h1 className="text-3xl">BestPic</h1>
        <p className="text-lg">select your best picture</p>
        <HeroImages image={pic} position="top-5 left-8  animateTop " />
        <HeroImages image={pic} position="bottom-5 left-10  animateRight" />
        <HeroImages image={pic} position="right-3 top-12 animateTop" />
        <HeroImages image={pic} position="bottom-12 right-6 animateLeft" />
      </div>
    </main>
  );
};

export default Hero;
