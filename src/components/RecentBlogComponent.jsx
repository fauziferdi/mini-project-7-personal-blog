import React, { useState, useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import ItemComponent from "./ItemComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecentBlogs } from "../redux/slices/recentBlogsSlice";
import LoadingComponent from "./LoadingComponent";
import { Link } from "react-router-dom";

const RecentBlogComponent = () => {
  const dispatch = useDispatch();
  const { blogs, loading, error } = useSelector((state) => state.recentBlogs);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        dispatch(fetchRecentBlogs(1));
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogs();
  }, [dispatch]);

  if (loading) {
    return <LoadingComponent />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (blogs.length === 0) {
  } else {
    return (
      <div className="container mt-5" data-cy="recent-blog-posts">
        <h2>Recent blog posts</h2>

        <div className="row mt-4">
          <div className="col-md-6 d-flex flex-column">
            <Link
              to={`/blog/${blogs[0].key}`}
              className="card flex-grow-1 border-0 text-decoration-none text-dark"
            >
              <img
                src={blogs[0].thumb}
                alt={blogs[0].title}
                className="card-img-top img-fluid rounded"
                style={{ maxHeight: "300px", objectFit: "cover" }}
              />
              <div className="card-body">
                <p className="author-title">
                  {blogs[0].author} {blogs[0].time}
                </p>
                <div className="d-flex">
                  <div className="w-100">
                    <h5 className="card-title">{blogs[0].title}</h5>
                  </div>
                  <div className="flex-shrink-1">
                    <FiArrowUpRight />
                  </div>
                </div>
                <p className="card-text">{blogs[0].desc.slice(0, 100)}</p>
                <p className="game-label">{blogs[0].tag}</p>
              </div>
            </Link>
          </div>
          <div className="col-md-6">
            <div className="row">
              {blogs.slice(1, 3).map((blog) => (
                <ItemComponent blog={blog} homeScreen={true} />
              ))}
            </div>
          </div>
          <div className="col-md-12 mt-2">
            <Link
              to={`/blog/${blogs[3].key}`}
              className="card mb-3 border-0 text-decoration-none text-dark"
            >
              <div className="row g-0">
                <div className="col-md-6" style={{ maxHeight: "300px" }}>
                  <img
                    src={blogs[3].thumb}
                    className="img-fluid rounded-start h-100"
                    alt={blogs[3].title}
                    style={{ width: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body pt-0">
                    <p className="author-title">
                      {blogs[3].author} {blogs[3].time}
                    </p>
                    <div className="d-flex">
                      <div className=" w-100">
                        <h5 className="card-title">{blogs[3].title}</h5>
                      </div>
                      <div className=" flex-shrink-1">
                        <FiArrowUpRight />
                      </div>
                    </div>
                    <p className="card-text">{blogs[3].desc}</p>
                    <p className="game-label">{blogs[3].tag}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default RecentBlogComponent;
