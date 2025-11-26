import toast from "react-hot-toast";
import { axiosInstance } from "../axios";

export const getPublicBlogs = async (setPublicBlogs, setLoading) => {
  try {
    const res = await axiosInstance.get("/blogs/public", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(res.data?.data);
    setPublicBlogs(res.data?.data);
  } catch (error) {
    toast.error("Error Fetching Public Blogs");
  } finally {
    setLoading(false);
  }
};

export const getMyBlogs = async (setBlogs, setLoading) => {
  try {
    const res = await axiosInstance.get("/blogs", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(res.data?.data);
    setBlogs(res.data?.data);
  } catch (error) {
    toast.error("Error Fetching Blogs");
  } finally {
    setLoading(false);
  }
};
