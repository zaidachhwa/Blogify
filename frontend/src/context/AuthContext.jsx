import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const ContextProvider = ({ children }) => {
  const navigate = useNavigate();

  // User States
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [userToken, setUserToken] = useState(
    localStorage.getItem("token") || null
  );

  // Blog States

  const [publicBlogs, setPublicBlogs] = useState([]);
  const [blogs, setBlogs] = useState([]);

  // Loading State
  const [loading, setLoading] = useState(true);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        userToken,
        setUserToken,
        navigate,
        // Public Blogs
        publicBlogs,
        setPublicBlogs,
        // My Blogs
        blogs,
        setBlogs,
        // Loading states
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
