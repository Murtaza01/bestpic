import { useMutation, useQuery } from "@tanstack/react-query";
import { User } from "../util/types";
import { fetchIncOnlineWins, fetchUsers } from "../util/http";
import { useEffect } from "react";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

type props = {
  winner: User;
};
// TODO: Add chart with top 5 winners to display on chart
const OnlineResultPage = ({ winner }: props) => {
  const {mutate,isPending,isError,isSuccess} = useMutation({
    mutationFn:()=>{
      return fetchIncOnlineWins(winner._id)
    },
  })

  const {data} = useQuery({
    queryKey:["wins"],
    queryFn:fetchUsers,
    enabled:isSuccess
  })

  console.log(data);

  useEffect(()=>{
    mutate()
  },[])

  if(isPending) return <Loading msg="its loading..." position="middle"  />

  if(isError) return <ErrorMessage msg="something went wrong" position="middle"/>

    
  return <h1>the results</h1>;
};

export default OnlineResultPage;
