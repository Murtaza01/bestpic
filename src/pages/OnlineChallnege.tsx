import { redirect } from "react-router-dom";
import { getStorageToken, shuffle } from "../util/helpers";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../util/http";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { User } from "../util/types";
import { useEffect, useState } from "react";
import OnlineResultPage from "./OnlineResult";

let firstRender = true;

const OnlineChallengePage = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const [userData, setUserData] = useState<User[]>([]);

  useEffect(() => {
    setUserData(data);
  }, [data]);

  if (isPending)
    return (
      <Loading
        msg="its loading"
        position="middle"
      />
    );

  if (!userData || isError)
    return (
      <ErrorMessage
        msg="something wrong happened please try again later"
        position="middle"
      />
    );


  if (firstRender) {
    shuffle(userData);
    firstRender = false;
  }

  function remove(i: number) {
    setTimeout(() => {
      setUserData((prev) => {
        if (i === 0) {
          return prev.toSpliced(1, 1);
        } else {
          return prev.toSpliced(0, 1);
        }
      });
    }, 300);
  }

  if (userData.length === 1) return <OnlineResultPage winner={userData[0]} />;

  return (
    <div className="h-screen">
      {userData.map(({ imageUrl, _id }, index) => {
        if (index < 2) {
          return (
            <img
              onClick={() => remove(index)}
              key={_id}
              src={imageUrl}
              alt=""
              className="h-[50%] w-full object-cover transition-all active:brightness-50 active:saturate-50"
            />
          );
        }
      })}
    </div>
  );
};

export async function onlineLoader() {
  const token = await getStorageToken();
  if (!token) return redirect("/login");
  return null;
}

export default OnlineChallengePage;
