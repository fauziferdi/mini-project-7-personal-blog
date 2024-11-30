import React from "react";

const FooterComponent = () => {
  return (
    <footer className=" py-4">
      <div className="container ">
        <ul className="list-inline mb-0 ">
          <li className="list-inline-item">
            <a href="#" className="text-decoration-none text-dark">
              &copy; {new Date().getFullYear()}
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-decoration-none text-dark">
              Twitter
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-decoration-none text-dark">
              LinkedIn
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-decoration-none text-dark">
              Email
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-decoration-none text-dark">
              RSS Feed
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-decoration-none text-dark">
              Add to Feedly
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterComponent;
