import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll"; // For smooth scrolling
import Blog from "./Blog";
import Footer from "./Footer";
import "../assets/css/Home.css";
import anik from "../assets/images/anik.jpeg";
import Skills from "./Skills";
import Education from "./Education";
import CompetitiveProgramming from "./CompetitiveProgramming";
import ProblemSolving from "./ProblemSolving";
import Leadership from "./Leadership";
import Projects from "./Projects";

const Home = () => {
  
    useEffect(() => {
        if (window.location.hash) {
            const element = document.getElementById(window.location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);
  return (
    <>
      {/* Hero Section */}
      <section id="home">
        <div className="container py-5 custom-design-home">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>Hi! I am Anik Chandra Deb.</h2>
              <p>
                I am a passionate software developer seeking a Junior Software
                Engineer Intern or Junior Full-Stack Developer Intern role.
                Skilled in MERN stack and competitive programming, I thrive in
                building scalable applications and solving complex problems...
              </p>
              <a href="/contact">
                <button className="btn btn-custom">Contact Me</button>
              </a>
              <a href="/Anik_Resume.pdf" download="Anikcd_Resume.pdf">
                <button className="btn btn-custom">Resume</button>
              </a>
            </div>
            <div className="col-md-6 text-center">
              <img src={anik} className="img-fluid" alt="Anik" />
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section id="skills">
        <Skills />
      </section>
      <section id="cp-experience">
        <CompetitiveProgramming />
      </section>
      <section id="problem-solving">
        <ProblemSolving />
      </section>
      <section id="projects">
        <Projects/>
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="leadership">
        <Leadership />
      </section>

      {/* Blog Section */}
      {/* Uncomment and modify the Blog component if necessary */}
      {/* <Blog limit="6" page="home" /> */}


    </>
  );
};

export default Home;
