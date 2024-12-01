import React from "react";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <footer className=" py-4">
      <div className="container ">
        <ul className="list-inline mb-0 ">
          <li className="list-inline-item">
            <Link to="#" className="text-decoration-none text-dark">
              &copy; {new Date().getFullYear()}
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" className="text-decoration-none text-dark">
              Twitter
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" className="text-decoration-none text-dark">
              LinkedIn
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" className="text-decoration-none text-dark">
              Email
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" className="text-decoration-none text-dark">
              RSS Feed
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" className="text-decoration-none text-dark">
              Add to Feedly
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterComponent;
