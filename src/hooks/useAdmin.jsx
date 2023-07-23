import {useQuery} from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
//import axios from "axios";

const useAdmin = () => {
  const {user} = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      if (!user) {
        return false;
      }
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      console.log("is admin response", res);
      return res.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};
export default useAdmin;
