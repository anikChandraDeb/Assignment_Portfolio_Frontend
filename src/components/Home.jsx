import React from "react";
import { Link } from 'react-router-dom';
import Blog from "./Blog"; 
import Footer from "./Footer";
import '../assets/css/Home.css';
import anik from '../assets/images/anik.jpeg'

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="container">
            <div className="row custom-design">
                <div className="col-6">
                    <h2>Building Scalable & Efficient Web Application</h2>
                    <p>I specialize in developing high-performance web applications with a focus on clean code, scalability, and seamless user experiences... </p>
                   <button className="btn btn-primary"><Link className="nav-link" to="/contact">Contact Me</Link></button>
                </div>
                <div className="col-6">
                    <img src={anik} alt="anik-image" />
                </div>
            </div>
      </div>

      {/* Blog Section */}
      <Blog limit="6" />

    </>
  );
};

export default Home;

