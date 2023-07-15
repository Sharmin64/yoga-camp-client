//import {useQuery} from "@tanstack/react-query";
import useAuth from "./useAuth";
import {useState} from "react";
import {useEffect} from "react";
//import useAxiosSecure from "./useAxiosSecure";

const useClass = () => {
  const {user, loading} = useAuth();
  const [classes, setClasses] = useState([]);
  //const [axioxSecure] = useAxiosSecure();
  //const token = localStorage.getItem("access-token");

  //const {refetch, data: eClass = []} = useQuery({
  //  queryKey: ["classes", user?.email],
  //  enabled: !loading,
  //  queryFn: async () => {
  //    const res = await axioxSecure(`/classes?email=${user?.email}`);
  //    console.log("res from axios", res);
  //    return res.data;
  //  },
  //});
  useEffect(() => {
    console.log(user?.email);

    fetch(`${import.meta.env.VITE_API_URL}/classes?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, [user?.email]);
  return classes;
};

export default useClass;
