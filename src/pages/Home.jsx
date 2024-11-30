import React from "react";
import RecentBlogComponent from "../components/RecentBlogComponent";
import AllBlogComponent from "../components/AllBlogComponent";
import HeaderComponent from "../components/HeaderComponent";

const Home = () => {
  return (
    <>
      <HeaderComponent />
      <RecentBlogComponent />
      <AllBlogComponent />
    </>
  );
};

export default Home;
