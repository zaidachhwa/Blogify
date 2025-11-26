import { useAuth } from "../../context/AuthContext";
import { axiosInstance } from "../axios";
import { toast } from "react-hot-toast";

export async function loginUser(data, setUserToken, setUser, reset, navigate) {
  try {
    const res = await axiosInstance.post("/users/login", data);
    console.log(res.data);
    const token = res.data?.data?.token;
    const user = res.data?.data?.user;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setUserToken(token);
    setUser(user);
    const successMsg = res.data?.message;
    toast.success(successMsg);
    navigate("/");

    return res.data;
  } catch (error) {
    const err = error.response?.data?.message || "Error occurred";
    toast.error(err);
  } finally {
    reset();
  }
}

export async function registerUser(
  data,
  setUserToken,
  setUser,
  reset,
  navigate
) {
  try {
    const res = await axiosInstance.post("/users/register", data);
    const token = res.data?.data?.token;
    const user = res.data?.data?.user;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setUserToken(token);
    setUser(user);
    const successMsg = res.data?.message;
    toast.success(successMsg);
    navigate("/");
  } catch (error) {
    const err = error.response?.data?.message || "Error occurred";
    toast.error(err);
  } finally {
    reset();
  }
}
