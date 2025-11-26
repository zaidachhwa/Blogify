import React from "react";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Tab from "../components/Tab";

const Home = () => {
  // const { user } = useAuth();
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
