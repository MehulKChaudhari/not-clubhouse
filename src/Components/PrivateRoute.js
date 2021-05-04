import React from "react";
import { Route,  Navigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

export const PrivateRoute = ({ element, path }) => {
  const { currentUser } = useAuth();
  if(currentUser){
    return element
  }
  else{
    return <Navigate to="/login" />
  }
};
