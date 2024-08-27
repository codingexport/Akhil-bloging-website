// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillInstagram, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import { FaGitSquare } from "react-icons/fa";
import { Context } from "../../main";

const footer = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isDashboard = useLocation("http://localhost:5173/dashboard");
  // eslint-disable-next-line react-hooks/rules-of-hooks, no-unused-vars
  const { mode, setMode } = useContext(Context);

  return (
    <footer
      className={
        isDashboard.pathname === "/dashboard"
          ? "hideFooter"
          : mode === "light"
          ? "light-footer"
          : "dark-footer"
      }
    >
      <div className="container">
        <div className="about">
          <h3>About</h3>
          <p>
            Welcome to our college blog, your go-to destination for insights, 
            stories, and updates from the heart of our academic community.
             Whether you re a current student, an alumnus, or someone 
             considering joining us, this blog is designed to keep you
              connected and informed about all things related to our college.
          </p>
          <p>
            <span>Email:</span>akhil@gmail.com
          </p>
          <p>
            <span>Phone:</span>8127798282
          </p>
        </div>
        <div className="quick_links">
          <h3>Quick Links</h3>
          <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/blogs"}>Blogs</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
          </ul>
        </div>
        <div className="categories">
          <h3>Categories</h3>
          <ul>
            <li>B Pharma Studendts</li>
            <li>MBA Studends</li>
            <li>BBA Studens</li>
            <li>BCA Students</li>
            <li>BGI</li>
            <li>Teacher</li>
          </ul>
        </div>
        <div className="news_letter">
          <div>
            <h3>Weekly Newletter</h3>
            <p>Get blog articles and offer via email</p>
          </div>
          <div>
            <input type="text" placeholder={`Your Email`} />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="logo">BGI <span>BLOG</span></div>
        <div className="links">
          <Link to={"https://www.instagram.com/coding_export81/"} target="_blank">
            <AiFillInstagram />
          </Link>
          <Link to={"https://github.com/codingexport"} target="_blank">
            <FaGitSquare />
          </Link>
          <Link to={"https://www.youtube.com/channel/UC6msBPmZTbXRAuNysXxFOYA"} target="_blank">
            <AiFillYoutube />
          </Link>
          <Link to={"https://www.linkedin.com/in/akhilesh-nishad-88ba10252/"} target="_blank">
            <AiFillLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default footer
