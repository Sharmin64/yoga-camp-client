//import {useQuery} from "@tanstack/react-query";
import useAuth from "./useAuth";
import {useState} from "react";
import {useEffect} from "react";

const useRole = () => {
  const {user, loading} = useAuth();
  const [role, setRole] = useState("");
  useEffect(() => {
    //console.log(user?.email);
    if (user?.email) {
      fetch(`${import.meta.env.VITE_API_URL}/role/email/${user?.email}`)
        .then((res) => res.json())
        .then((data) => setRole(data.role));
    }
  }, [user?.email]);
  //console.log(role);
  return role;
};
export default useRole;
