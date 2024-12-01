import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ItemComponent from "./ItemComponent";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllBlogs } from "../redux/slices/allBlogsSlice";
import { Link } from "react-router-dom"; // Import Link
import LoadingComponent from "./LoadingComponent";

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
    return <LoadingComponent />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="container mt-5">
        <h2>All blog posts</h2>

        <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
          {blogs.slice(0, 6).map((blog) => (
            <ItemComponent key={blog.key} blog={blog} />
          ))}
        </div>
        <hr />
        <div className="d-flex justify-content-between mt-2">
          <Link
            to="#"
            onClick={handlePreviousPage}
            disabled={page === 1}
            className="text-decoration-none text-dark"
          >
            <FaArrowLeft /> Previous
          </Link>
          <Link
            to="#"
            onClick={handleNextPage}
            className="text-decoration-none text-dark"
          >
            Next <FaArrowRight />
          </Link>
        </div>
      </div>
    </>
  );
};

export default AllBlogComponent;
