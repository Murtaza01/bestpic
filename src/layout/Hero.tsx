import pic from "../assets/pic.jpg";

const Hero = () => {
  return (
    <main>
      <div className="relative h-[70dvh] space-y-2 overflow-hidden p-24 text-center">
        <h1 className="text-3xl">BestPic</h1>
        <p className="text-lg">select your best picture</p>
        <span className="animateTop absolute left-3 top-5 w-[20vw]">
          <img
            src={pic}
            className="h-32 w-full object-cover object-[30%_50%]"
            alt=""
          />
        </span>
        <span className="animateLeft absolute bottom-12 right-6 w-[20vw] border-2 bg-green-300">
          <img
            src={pic}
            className="h-32 w-full object-cover object-[30%_50%]"
            alt=""
          />
        </span>
        <span className="animateTop absolute right-3 top-12 w-[20vw] border-2 bg-green-300">
          <img
            src={pic}
            className="h-32 w-full object-cover object-[30%_50%]"
            alt=""
          />
        </span>
        <span className="animateRight absolute bottom-5 left-10 w-[20vw] border-2 bg-green-300">
          <img
            src={pic}
            className="h-32 w-full object-cover object-[30%_50%]"
            alt=""
          />
        </span>
      </div>
    </main>
  );
};

export default Hero;
