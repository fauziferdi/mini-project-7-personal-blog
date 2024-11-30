import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const AllBlogComponent = () => {
  const [blogAll, setBlogAll] = useState([]);

  useEffect(() => {
    fetchBlogAll();
    console.log(blogAll);
  }, []);

  const fetchBlogAll = async () => {
    console.log("sda");
    try {
      const response = await axios.get(
        "https://lumoshive-academy-media-api.vercel.app/api/games/news?page=1&search"
      );
      setBlogAll(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  if (blogAll.length === 0) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div className="container mt-5">
          <h2>All blog posts</h2>
          <div class="row row-cols-1 row-cols-md-3 g-4 mt-4">
            {blogAll.slice(0, 6).map((blog) => (
              <div class="col">
                <div class="card">
                  <img src={blog.thumb} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <p class="author-title">
                      {blog.author} {blog.time}
                    </p>
                    <h5 class="card-title">{blog.title.slice(0, 50)}</h5>
                    <p class="card-text">{blog.desc.slice(0, 120)}</p>
                    <button class="btn btn-sm btn-primary">{blog.tag}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr />
          <div className="d-flex justify-content-between mt-2">
            <a>
              <FaArrowLeft /> Previous
            </a>
            <a>
              Next <FaArrowRight />
            </a>
          </div>
        </div>
      </>
    );
  }
};

export default AllBlogComponent;
