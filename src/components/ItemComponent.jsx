import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
const ItemComponent = ({ blogAll, detailActive = false }) => {
  return blogAll.slice(0, 6).map((blog) => (
    <div class="col">
      <div class="card">
        <img src={blog.thumb} class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="author-title">
            {blog.author} {blog.time}
          </p>
          <div class="d-flex">
            <div class=" w-100">
              <h5 class="card-title">{blog.title.slice(0, 50)}</h5>
            </div>
            <div class=" flex-shrink-1">
              <FiArrowUpRight />
            </div>
          </div>
          <p class="card-text">{blog.desc.slice(0, 120)} </p>
          {detailActive ? null : (
            <button className="btn btn-sm btn-primary">{blog.tag}</button>
          )}
        </div>
      </div>
    </div>
  ));
};

export default ItemComponent;
