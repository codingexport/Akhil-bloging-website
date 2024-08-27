// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
       
        <p>
        <h3> About Our College Blog</h3>
        Welcome to our college blog, your go-to destination for insights, stories, 
        and updates from the heart of our academic community. Whether you are a
         current student, an alumnus, or someone considering joining us, this blog is 
         designed to keep you connected and informed about all things related to our college.
        </p>
        <p>
        <h3>Our Mission</h3>
        Our mission is to foster a vibrant community through engaging content that highlights 
        the unique experiences, achievements, and perspectives of our students, faculty, and alumni.
         We aim to create a platform where everyone can share their stories, ideas, and knowledge,
          contributing to a richer and more dynamic college environment.
        </p>
        <p>
        <h3>What You’ll Find Here</h3>
          <h4>Student Stories:</h4> Get inspired by the journeys and accomplishments of our students. From academic achievements to extracurricular triumphs, we celebrate the diverse talents and passions within our college.
          <h4>Faculty Insights:</h4> Learn from the experts! Our faculty members share their research, teaching experiences, and professional insights to provide a deeper understanding of various subjects and fields.
         <h4> Campus Life:</h4> Stay updated on the latest events, activities, and happenings around campus. Whether it is a cultural fest, a sports event, or a guest lecture, you will find all the details here.
        <h4> Alumni Success:</h4> Discover the paths our graduates have taken and the impact they are making in their respective fields. Our alumni stories showcase the lifelong connection and support within our college community.
        <h4>Tips & Resources:</h4> From study tips to career advice, our blog offers valuable resources to help you succeed both academically and personally.
        </p>
        <p>
        <h3>Join the Conversation</h3>
        We believe that every member of our college community has a story to tell. If you have a story, 
        idea, or experience you had like to share, we encourage you to contribute to our blog. Your voice matters,
         and together, we can build a stronger and more inclusive community.
        </p>
        <p>
        <h3>Connect With Us</h3>
         Stay connected with us through our social media channels and never miss an update. Follow us on coding_export81  .

         Thank you for visiting our blog. We hope you find our content engaging, informative, and inspiring. Together, let is celebrate the vibrant community that makes our college special.
        </p>
      </div>
    </article>
  );
};

export default About;