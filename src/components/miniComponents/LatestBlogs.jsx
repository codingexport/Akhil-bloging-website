// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const LatestBlogs = ({ heading, newClass, blogs }) => {
  return (
    <section
      className={
        // eslint-disable-next-line react/prop-types
        newClass && newClass.length > 0 ? "dashboard-blogs blogs" : "blogs"
      }
    >
      <h3>{heading}</h3>
      <div className="container">
        {blogs &&
          // eslint-disable-next-line react/prop-types
          blogs.map((element) => {
            return (
              <Link to={`/blog/${element._id}`} className="card" key={element._id}>
                <img src={element.mainImage.url} alt="blog" />
                <span className="category">{element.category}</span>
                <h4>{element.title}</h4>
                <div className="writer_section">
                  <div className="author">
                    <img src={element.authorAvatar} alt="author_avatar" />
                    <p>{element.authorName}</p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </section>
  );
};

export default LatestBlogs;