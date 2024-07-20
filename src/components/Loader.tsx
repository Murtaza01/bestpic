import { LuLoader2 } from "react-icons/lu";
import Box from "./Box";
type props = {
  msg: string;
};

const Loader = ({ msg }: props) => {
  return (
    <Box style="-translate-y-16 gap-3">
      <p className="capitalize">{msg}</p>
      <LuLoader2 className="animate-spin text-4xl" />
    </Box>
  );
};

export default Loader;
