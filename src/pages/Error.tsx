import { useRouteError } from "react-router-dom";
import { useAppDispatch } from "../store";
import { clear } from "../store/tokenSlice";
import sad from "../assets/images/sad.png";

const ErrorPage = () => {
  const error = useRouteError() as Error;
  const dispatch = useAppDispatch();

  console.log(error);

  window.onpopstate = () => {
    dispatch(clear());
  };
  
  return (
    <div className="grid h-screen px-5 text-center capitalize place-content-center place-items-center gap-3">
      <h1>something went wrong, please go back and login again</h1>
      <img src={sad} width={100} height={100} alt="sad" />
    </div>
  );
};

export default ErrorPage;
