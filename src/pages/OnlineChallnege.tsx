import { redirect } from "react-router-dom";
import { getStorageToken, shuffle } from "../util/helpers";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../util/http";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { User } from "../util/types";
import { useEffect, useState } from "react";
import OnlineResultPage from "./OnlineResult";
import HeartButton from "../components/HeartButton";

let firstRender = true;

const OnlineChallengePage = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  const [userData, setUserData] = useState<User[]>([]);
  const [width, setWidth] = useState<string>();
  const [index, setIndex] = useState<number>();
  useEffect(() => {
    setUserData(data);
  }, [data]);

  if (isPending) return <Loading msg="its loading" position="middle" />;

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

  function handleClick(i: number) {
    if (i === 0) setWidth("first:w-[92%] last:w-[8%]");
    else if (i === 1) setWidth("last:w-[92%] first:w-[8%]");
    setIndex(i);
  }

  function handleSubmit() {
    setTimeout(() => {
      setUserData((prev) => {
        if (index === 0) {
          return prev.toSpliced(1, 1);
        } else {
          return prev.toSpliced(0, 1);
        }
      });
      setWidth("")
    }, 1100);
  }

  if (userData.length === 1) return <OnlineResultPage winner={userData[0]} />;

  return (
    <div className="relative">
      <div className="flex h-screen">
        {userData.map(({ imageUrl, _id }, index) => {
          if (index < 2) {
            return (
              <img
                onClick={() => handleClick(index)}
                key={_id}
                src={imageUrl}
                alt=""
                className={`${width ? width : "w-[50%]"} object-cover transition-all duration-300 active:brightness-50 active:saturate-50`}
              />
            );
          }
        })}
      </div>
      {width && (
        <HeartButton
          onSubmit={handleSubmit}
          style={`absolute bottom-10 z-20 ${
            width.startsWith("first")
              ? "right-[calc(50%-3rem)] "
              : "left-[calc(50%-3rem)]"
          }`}
        />
      )}
    </div>
  );
};

export async function onlineLoader() {
  const token = await getStorageToken();
  if (!token) return redirect("/login");
  return null;
}

export default OnlineChallengePage;
