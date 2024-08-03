type props = {
  data: {
    id: number;
    bg?: string;
    name?: string;
    svg: string;
  };
};

const Figures = ({ data }: props) => {
  const { bg, svg, name } = data;
  const isBg = bg ? `${bg} rounded-full px-1 pt-1` : "";
  return (
    <div className="flex flex-col items-center gap-2">
      <figure className={`${isBg} max-w-20`}>
        <img
          src={svg}
          alt=""
          className={`${"mx-auto max-w-full drop-shadow-md"}`}
        />
      </figure>
      <h2>{name}</h2>
    </div>
  );
};

export default Figures;
