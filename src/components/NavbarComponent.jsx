import React from "react";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-light">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold fs-1">
          LumosBlog
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link to="/" className="nav-link active" aria-current="page">
              Blog
            </Link>
            <Link to="/about" className="nav-link active">
              About
            </Link>
            <Link to="/newsletter" className="nav-link active">
              Newsletter
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
