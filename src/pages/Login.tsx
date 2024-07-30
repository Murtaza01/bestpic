import From from "../components/Form";
import { Link, useLoaderData } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import { fetchToken } from "../util/http";
import storage from "redux-persist/lib/storage";
import { LoggedUserData } from "../util/types";


const LoginPage = () => {
  const data = useLoaderData() || {name:"",imageUrl:""}

  return (
    <div className="loginBg flex h-screen flex-col font-mono font-bold text-white">
      <Link to={".."} className="w-max px-2 py-1">
        <MdKeyboardBackspace className="text-4xl text-black" />
      </Link>
      <From data={data as LoggedUserData} />
    </div>
  );
};

export async function loginLoader(){
  const token = await storage.getItem("token")
  if(token){
    const resData = await fetchToken();
    return resData
  }
  return null;
  
}



export default LoginPage;

