import { useEffect, useState } from "react";
import From from "./components/From";
import { fetchUsers } from "./util/http";

interface userObj {
  _id: string;
  name: string;
  age?: number;
  imageUrl?: string;
}

const App = () => {
  const [users, setUsers] = useState<userObj[]>();
  useEffect(() => {
    (async () => {
      const result = await fetchUsers();
      setUsers(result);
    })();
  }, []);

  return (
    <>
      <From />
      <div className="">
        <ul className="flex flex-wrap items-center justify-center gap-5">
          {users?.map(({ name, imageUrl, age }, index) => {
            return (
              <li className="flex flex-col gap-2 border-2 p-5" key={index}>
                <a href={imageUrl}>image</a>
                <img src={imageUrl} alt="" />
                <span>{name}</span>
                <span> Age: {age}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
