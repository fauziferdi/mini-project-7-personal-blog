import React, { useEffect } from "react";
import NewsletterComponent from "./NewsletterComponent";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetailBlog } from "../redux/slices/detailBlogSlice";
import { fetchRecentBlogs } from "../redux/slices/recentBlogsSlice";
import parse from "html-react-parser";
import ItemComponent from "./ItemComponent";

const DetailBlogComponent = () => {
  const dispatch = useDispatch();
  const {
    blog,
    loading: detailBlogLoading,
    error: detailBlogError,
  } = useSelector((state) => state.detailBlogs);
  const {
    blogs,
    loading: recentBlogsLoading,
    error: recentBlogsError,
  } = useSelector((state) => state.recentBlogs);

  const params = useParams();
  const key = params["*"];

  useEffect(() => {
    dispatch(fetchDetailBlog(key));
    dispatch(fetchRecentBlogs(1));
  }, [dispatch, key]);

  if (recentBlogsLoading && detailBlogLoading) {
    return <div>Loading...</div>;
  }

  if (recentBlogsError && detailBlogError) {
    return <div>Error: {recentBlogsError || detailBlogError}</div>;
  }

  const reactElement = blog.content ? parse(blog.content) : null;

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 pe-5">
            {blogs.map((blog) => (
              <ItemComponent key={blog.key} blog={blog} detailActive={true} />
            ))}
          </div>
          <div className="col-md-8">
            <div>
              <p className="author-title">
                {blog.author} {blog.time}
              </p>
              <h2>{blog.title}</h2>
              {reactElement}
            </div>
            <NewsletterComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailBlogComponent;
