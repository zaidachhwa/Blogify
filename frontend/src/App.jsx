import Home from "./pages/Home";
import { ContextProvider } from "./context/AuthContext";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Register Page */}
        <Route path="/register" element={<Register />} />
      </Routes>
      <Toaster position="top-center" />
    </ContextProvider>
  );
};

export default App;
