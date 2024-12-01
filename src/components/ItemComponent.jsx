import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const ItemComponent = ({ blog, detailActive = false, homeScreen = false }) => {
  if (homeScreen) {
    return (
      <div className="col-md-12" key={blog.key}>
        <Link
          to={`/blog/${blog.key}`}
          className="card text-decoration-none text-dark border-0"
        >
          <div className="row g-0">
            <div className="col-md-7">
              <img
                src={blog.thumb}
                className="img-fluid rounded-start"
                alt={blog.title}
                style={{ width: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-5">
              <div className="card-body pt-0">
                <p className="author-title">
                  {blog.author} {blog.time}
                </p>
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.desc.slice(0, 100)}</p>
                <p className="game-label">{blog.tag}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="col">
        <Link
          to={`/blog/${blog.key}`}
          className="card text-decoration-none text-dark border-0"
        >
          <img src={blog.thumb} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="author-title">
              {blog.author} {blog.time}
            </p>
            <div className="d-flex">
              <div className="w-100">
                <h5 className="card-title">{blog.title.slice(0, 50)}</h5>
              </div>
              <div className="flex-shrink-1">
                <FiArrowUpRight />
              </div>
            </div>
            <p className="card-text">{blog.desc.slice(0, 120)} </p>
            {detailActive ? null : <p className="game-label">{blog.tag}</p>}
          </div>
        </Link>
      </div>
    );
  }
};

export default ItemComponent;
