import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ItemComponent from "./ItemComponent";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllBlogs } from "../redux/slices/allBlogsSlice";

const AllBlogComponent = () => {
  const dispatch = useDispatch();
  const { blogs, loading, error } = useSelector((state) => state.allBlogs);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        dispatch(fetchAllBlogs(page));
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogs();
  }, [dispatch, page]);

  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="container mt-5">
        <h2>All blog posts</h2>
        <button onClick={() => console.log(blogs)}></button>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
          <ItemComponent blogAll={blogs} amount="6" />
        </div>
        <hr />
        <div className="d-flex justify-content-between mt-2">
          <a href="#" onClick={handlePreviousPage} disabled={page === 1}>
            <FaArrowLeft /> Previous
          </a>
          <a href="#" onClick={handleNextPage}>
            Next <FaArrowRight />
          </a>
        </div>
      </div>
    </>
  );
};

export default AllBlogComponent;
