import {Navigate, useLocation} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import {toast} from "react-hot-toast";

const AdminRoute = ({children}) => {
  const {user, loading} = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  console.log(user, isAdmin);
  if (loading || isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && isAdmin) {
    return children;
  } else {
    toast("you are not an Admin");
  }
  return <Navigate to="/" state={{from: location}} replace></Navigate>;
};

export default AdminRoute;
