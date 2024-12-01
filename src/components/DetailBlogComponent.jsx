import React, { useState, useEffect } from "react";
import axios from "axios";
import parse from "html-react-parser";
import NewsletterComponent from "./NewsletterComponent";
import ItemComponent from "./ItemComponent";

const DetailBlogComponent = () => {
  const [blogDetail, setBlogDetail] = useState([]);

  useEffect(() => {
    fetchBlogDetail();
    console.log(blogDetail);
  }, []);

  const [blogAll, setBlogAll] = useState([]);

  useEffect(() => {
    fetchBlogAll();
    console.log(blogAll);
  }, []);

  const fetchBlogAll = async () => {
    console.log("sda");
    try {
      const response = await axios.get(
        "https://lumoshive-academy-media-api.vercel.app/api/games/news?page=1&search"
      );
      setBlogAll(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const fetchBlogDetail = async () => {
    console.log("sda");
    try {
      const response = await axios.get(
        "https://lumoshive-academy-media-api.vercel.app/api/detail/2022/02/09/petisi-refund-battlefield-2042"
      );
      setBlogDetail(response.data.results);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  if (blogDetail.length === 0) {
    return <div>Loading...</div>;
  } else {
    const reactElement = parse(blogDetail.content);
    return (
      <>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4">
              <div class="row row-cols-1 g-4 mt-4">
                <ItemComponent blogAll={blogAll} detailActive="true" />
              </div>
            </div>
            <div className="col-md-8">
              <div>
                <p class="author-title">
                  {blogDetail.author} {blogDetail.time}
                </p>
                <h2>{blogDetail.title}</h2>
                {reactElement}
              </div>
              <NewsletterComponent />
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default DetailBlogComponent;
