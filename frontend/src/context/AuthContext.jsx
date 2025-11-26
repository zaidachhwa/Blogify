import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const ContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [userToken, setUserToken] = useState(
    localStorage.getItem("token") || null
  );
  return (
    <AuthContext.Provider
      value={{ user, setUser, userToken, setUserToken, navigate }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
