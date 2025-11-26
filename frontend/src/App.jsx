import Home from "./pages/Home";
import { ContextProvider } from "./context/AuthContext";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <ContextProvider>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

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
