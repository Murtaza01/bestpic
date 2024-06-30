type props = {
  position: string;
  image: string;
};

const HeroImages = ({ position, image }: props) => {
  return (
    <span className={`absolute ${position} w-[20vw]`}>
      <img
        src={image}
        className="h-32 w-full object-cover object-[30%_50%]"
        alt=""
      />
    </span>
  );
};

export default HeroImages;
