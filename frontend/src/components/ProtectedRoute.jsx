import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, userToken } = useAuth();

  return user && userToken ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
