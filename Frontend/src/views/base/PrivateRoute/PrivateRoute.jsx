import { useContext } from "react";

import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../../context/Auth";
function PrivateRoute({ role }) {
  const { token, decoded } = useContext(AuthContext);
  console.log(token);
  console.log(decoded.role);
  return token && role.includes(decoded.role) ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} />
  );
}
export default PrivateRoute;
