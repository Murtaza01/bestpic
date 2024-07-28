import From from "../components/Form";
import { Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import { useEffect, useState } from "react";
import { getToken } from "../util/helpers";
import { fetchToken } from "../util/http";
import { LoggedUserData } from "../util/types";


const LoginPage = () => {
  const [data,setData] = useState<LoggedUserData>()

  useEffect(()=>{
    const token = getToken()
    console.log("no token");
    
    if(token){
      console.log(" token exist");
      (async ()=>{
       const resData = await fetchToken()
       setData(resData)
      })()
    } 
    
  },[])

  return (
    <div className="loginBg flex h-screen flex-col font-mono font-bold text-white">
      <Link to={".."} className="w-max px-2 py-1">
        <MdKeyboardBackspace className="text-4xl text-black" />
      </Link>
      <From data={data && data} />
    </div>
  );
};

export default LoginPage;
