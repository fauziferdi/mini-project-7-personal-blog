import React, { useState, useEffect } from "react";
import axios from "axios";

const RecentBlogComponent = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
    console.log(blogs);
  }, []);

  const fetchBlogs = async () => {
    console.log("sda");
    try {
      const response = await axios.get(
        "https://lumoshive-academy-media-api.vercel.app/api/games?page=1"
      );
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  if (blogs.length === 0) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="container mt-5">
        <h2>Recent blog posts</h2>
        <div className="row mt-4">
          <div className="col-md-6 d-flex flex-column">
            <div className="card flex-grow-1 border-0">
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
                <h5 className="card-title">{blogs[0].title}</h5>

                <p className="card-text">{blogs[0].desc.slice(0, 100)}</p>
                <button className="btn btn-sm btn-primary">
                  {blogs[0].tag}
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12">
                <div className="card mb-3 border-0">
                  <div className="row g-0">
                    <div className="col-md-7 h-100">
                      <img
                        src={blogs[1].thumb}
                        className="img-fluid rounded-start"
                        alt={blogs[1].title}
                        style={{ width: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <div className="col-md-5">
                      <div className="card-body pt-0">
                        <p className="author-title">
                          {blogs[1].author} {blogs[1].time}
                        </p>
                        <h5 className="card-title">{blogs[1].title}</h5>

                        <p className="card-text">
                          {blogs[1].desc.slice(0, 100)}
                        </p>
                        <button className="btn btn-sm btn-primary">
                          {blogs[1].tag}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-2">
                <div className="card mb-3 border-0">
                  <div className="row g-0">
                    <div className="col-md-7">
                      <img
                        src={blogs[2].thumb}
                        className="img-fluid rounded-start"
                        alt={blogs[2].title}
                        style={{ width: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <div className="col-md-5">
                      <div className="card-body pt-0">
                        <p className="author-title">
                          {blogs[2].author} {blogs[2].time}
                        </p>
                        <h5 className="card-title">{blogs[2].title}</h5>

                        <p className="card-text">
                          {blogs[2].desc.slice(0, 100)}
                        </p>
                        <button className="btn btn-sm btn-primary">
                          {blogs[2].tag}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-2">
            <div className="card mb-3 border-0">
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
                    <h5 className="card-title">{blogs[3].title}</h5>
                    <p className="card-text">{blogs[3].desc}</p>
                    <button className="btn btn-sm btn-primary">
                      {blogs[3].tag}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default RecentBlogComponent;
