import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Tab from "../components/Tab";
import { getMyBlogs, getPublicBlogs } from "../api/blogs/blog.api";

const Home = () => {
  const { setBlogs, setPublicBlogs, setLoading } = useAuth();

  useEffect(() => {
    getPublicBlogs(setPublicBlogs, setLoading);
    getMyBlogs(setBlogs, setLoading);
  }, []);
  return (
    <>
      <div className="min-h-screen w-full">
        <Navbar />
        <Hero />
        <Tab />
      </div>
    </>
  );
};

export default Home;
