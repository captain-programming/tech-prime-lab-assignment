import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const PrivateRoute = ({children}) => {
  const {isAuth} = useContext(AuthContext);
  const loginData = localStorage.getItem("primelab") || "";

  if(loginData || isAuth){
    return children
  }

  return <Navigate to="/login"/>
}

export default PrivateRoute