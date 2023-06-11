import {useQuery} from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useClass = () => {
  const {user, loading} = useAuth();
  const [axioxSecure] = useAxiosSecure();
  //const token = localStorage.getItem("access-token");

  const {refetch, data: eClass = []} = useQuery({
    queryKey: ["classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axioxSecure(`/classes?email=${user?.email}`);
      console.log("res from axios", res);
      return res.data;
    },
  });
  return [eClass, refetch];
};

export default useClass;
