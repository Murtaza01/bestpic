import From from "../components/Form";
import { Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import { fetchToken } from "../util/http";
import { LoggedUserData } from "../util/types";
import {  useEffect, useState } from "react";
import { useAppSelector } from "../store";



const LoginPage = () => {
  // const data = useLoaderData() || {name:"",imageUrl:""}
  const [data, setData] = useState<LoggedUserData>()
  const token = useAppSelector(state => state.token.value)

  useEffect(() => {
    if (token) {
      (async () => {
        const resData = await fetchToken(token)
        setData(resData)
      }
      )()
    }
  }, [])

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

