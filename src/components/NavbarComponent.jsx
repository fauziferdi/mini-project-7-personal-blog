import React from "react";

const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-light">
      <div className="container">
        <a className="navbar-brand fw-bold fs-1" href="#">
          LumosBlog
        </a>
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
            <a className="nav-link active" aria-current="page" href="#">
              Blog
            </a>
            <a className="nav-link active" href="#">
              About
            </a>
            <a className="nav-link active" href="#">
              Newaletter
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
