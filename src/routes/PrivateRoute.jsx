import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-ring loading-lg"></span>;
  }

  if (user) {
    return children;
  }

  // Correctly pass location state for redirection after login
  return <Navigate to='/signIn' state={{ from: location.pathname }} />;
};

export default PrivateRoute;
