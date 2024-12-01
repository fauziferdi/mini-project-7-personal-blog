import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const ItemComponent = ({ blogAll, detailActive = false, amount }) => {
  return blogAll.slice(0, amount).map((blog) => (
    <div className="col" key={blog.key}>
      <Link
        to={`/blog/${blog.key}`}
        className="card text-decoration-none text-dark"
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
          {detailActive ? null : (
            <button className="btn btn-sm btn-primary">{blog.tag}</button>
          )}
        </div>
      </Link>
    </div>
  ));
};

export default ItemComponent;
