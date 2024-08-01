import From from "../components/Form";
import { Link, useLoaderData } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import { fetchToken } from "../util/http";
import { user, User } from "../util/types";
import { getStorageToken } from "../util/helpers";

const LoginPage = () => {
  const data = useLoaderData() || user;

  return (
    <div className="loginBg flex h-screen flex-col font-mono font-bold text-white">
      <Link to={".."} className="w-max px-2 py-1">
        <MdKeyboardBackspace className="text-4xl text-black" />
      </Link>
      <From userData={data as User} />
    </div>
  );
};

export async function loginLoader() {
  const token = await getStorageToken();

  if (token) {
    const response = await fetchToken();
    if (response instanceof Error) throw Error(response.message);
    return response;
  }
  return null;
}

export default LoginPage;
