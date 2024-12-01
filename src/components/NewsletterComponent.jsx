import React from "react";

const NewsletterComponent = () => {
  return (
    <div className="container my-5" data-cy="newsletter">
      <div className="d-flex justify-content-center align-items-center text-center">
        <div>
          <p className="text-primary-cstm fw-bold">Newslatters</p>
          <h2 className="fw-bold">Stories and interviews</h2>
          <p>
            Subscribe to learn about new product features, the latest in
            technology, <br /> solutions, and updates.
          </p>
          <form className="row g-3">
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
              />
              <p className="text-muted">
                We care about your data in our privacy policy
              </p>
            </div>
            <div className="col-md-2">
              <button type="submit" className="btn btn-primary-cstm ms-2">
                Subscribe
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
