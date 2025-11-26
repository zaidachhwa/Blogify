import { CircleUserRound, Rss, Search } from "lucide-react";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Tab = () => {
  const [myBlogsTab, setMyBlogsTab] = useState(false);
  const { blogs, publicBlogs, loading } = useAuth();

  return (
    <div className="flex md:w-9/12 mx-auto flex-col gap-4 my-10 p-3">
      {/* 1 */}
      <div className="mb-5 w-full">
        <h3 className="font-bold text-3xl mb-2">All Articles</h3>
        <p className="tracking-wide md:w-2/3 text-gray-600">
          Find or list tools that will help designers build to last. Simplify
          design with our comprehensive and carefully vetted library from start
        </p>
      </div>
      {/* 2 */}
      <div className="w-full flex flex-col md:flex-row gap-6 items-center justify-center">
        <div className="flex p-2 border-2 border-gray-300 text-gray-600  rounded-md w-full md:w-1/2 items-center gap-2">
          <Search />
          <input
            type="text"
            className="w-full
             outline-0"
            placeholder="Search Blogs"
          />
        </div>

        {/* Tab stack  */}
        <div className="flex items-center gap-3">
          <span
            onClick={() => setMyBlogsTab(false)}
            className={`flex items-center gap-2 border  rounded-md p-2 px-6 cursor-pointer ${
              myBlogsTab
                ? "border-gray-300 text-gray-600"
                : "border-amber-300 text-amber-600 bg-amber-50"
            }`}
          >
            <Rss />
            <span>All Blogs</span>
          </span>
          <span
            onClick={() => setMyBlogsTab(true)}
            className={`flex items-center gap-2 border  rounded-md p-2 px-6 cursor-pointer ${
              !myBlogsTab
                ? "border-gray-300 text-gray-600"
                : "border-amber-300 text-amber-600 bg-amber-50"
            }`}
          >
            <CircleUserRound />
            <span>My Blogs</span>
          </span>
        </div>
      </div>

      {/* Blogs Grid  */}

      {loading ? (
        <div className="text-3xl flex items-center justify-center mt-10">
          Loading Please wait..
        </div>
      ) : myBlogsTab ? (
        <div className="flex mt-10 flex-col w-full gap-5">
          <h3 className="font-bold text-3xl mb-2">My Blogs</h3>
          <div
            className="w-full
       grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {blogs
              ? blogs.map((blog) => (
                  <div
                    key={blog._id}
                    className="border border-gray-300 shadow-md min-h-60 max-h-60 rounded-md hover:border-amber-300 hover:shadow-lg cursor-pointer transition-all"
                  ></div>
                ))
              : "No Blogs to show "}
          </div>
        </div>
      ) : (
        <div className="flex mt-10 flex-col w-full gap-5">
          <h3 className="font-bold text-3xl mb-2">Public Blogs</h3>
          <div
            className="w-full
       grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {publicBlogs
              ? publicBlogs.map((blog) => (
                  <div
                    key={blog._id}
                    className="border border-gray-300 shadow-md min-h-60 max-h-60 rounded-md hover:border-amber-300 hover:shadow-lg cursor-pointer transition-all"
                  ></div>
                ))
              : "No Blogs to show "}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tab;
