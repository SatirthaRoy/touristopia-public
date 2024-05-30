import { useContext } from "react"
import { contextData } from "./Shared/Provider"
import { Navigate, useLocation } from "react-router-dom";

const Private = ({children}) => {
  const {user, loading} = useContext(contextData);

  const location = useLocation();

  if(loading) {
    return <div className="text-7xl text-center">
      <span className="loading loading-spinner text-primary"></span>
    </div>
  }

  if(user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to='/login'></Navigate>
  }

}

export default Private