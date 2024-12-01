import React, { useState } from "react";
import { subscribeBlog } from "../redux/slices/subscribeSlice";
import { useDispatch, useSelector } from "react-redux";
import LoadingComponent from "./LoadingComponent";
import Swal from "sweetalert2";

const NewsletterComponent = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.subscribeBlogs);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(subscribeBlog(email))
      .unwrap()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Thank you!",
          text: "You have successfully subscribed.",
        });
        setEmail("");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again later.",
        });
        console.error("Subscription error:", err);
      });
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container my-5 ">
      <div className="d-flex justify-content-center align-items-center text-center">
        <div>
          <p className="text-primary-cstm fw-bold">Newslatters</p>
          <h2 className="fw-bold">Stories and interviews</h2>
          <p>
            Subscribe to learn about new product features, the latest in
            technology, <br /> solutions, and updates.
          </p>

          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md" />
            <div className="col-md-8">
              <label htmlFor="inputEmail" className="visually-hidden">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Enter your email"
                value={email}
                onChange={handleChange}
                required
                disabled={loading}
              />
              <p className="text-muted">
                We care about your data in our privacy policy
              </p>
            </div>
            <div className="col-md-2">
              <button
                type="submit"
                className="btn btn-primary-cstm ms-2"
                disabled={loading}
              >
                {loading ? (
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                ) : (
                  "Subscribe"
                )}
              </button>
            </div>
            <div className="col-md" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterComponent;
