// eslint-disable-next-line no-unused-vars
import React, { useEffect, useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home'; // Ensure correct case
import About from './components/pages/About'; // Corrected path
import Blogs from './components/pages/Blogs'; // Corrected path
import SingleBlog from './components/pages/SingleBlog'; // Corrected path
import Dashboard from './components/pages/Dashboard';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import AllAuthors from './components/pages/AllAuthors';
import UpdateBlog from './components/pages/UpdateBlog';
import Navbar from "../src/components/layout/Navbar";
import Footer from "../src/components/layout/Footer";
import { Context } from "./main";
import axios from "axios";

const App = () => {
  const { setUser, isAuthenticated, setIsAuthenticated, setBlogs } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/api/v1/myprofile", {
          withCredentials: true,
        });
        setUser(data.user);
        setIsAuthenticated(true);
      } catch (error) {
        console.log(error);
        setIsAuthenticated(false);
        setUser({});
      }
    };

    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/api/v1/all", {
          withCredentials: true,
        });
        setBlogs(data.allBlogs);
      } catch (error) {
        setBlogs([]);
      }
    };

    fetchUser();
    fetchBlogs();
  }, [isAuthenticated, setBlogs, setIsAuthenticated, setUser]);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/about" element={<About />} />
          <Route path="/authors" element={<AllAuthors />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blog/update/:id" element={<UpdateBlog />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
