import React from "react";
import RecentBlogComponent from "../components/RecentBlogComponent";
import AllBlogComponent from "../components/AllBlogComponent";
import HeaderComponent from "../components/HeaderComponent";

const Home = () => {
  return (
    <>
      <HeaderComponent />
      <div data-cy="recent-blog-section">
        <RecentBlogComponent />
      </div>
      <div data-cy="all-blog-section">
        <AllBlogComponent />
      </div>
    </>
  );
};

export default Home;
