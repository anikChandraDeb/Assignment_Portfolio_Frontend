import React from "react";
import Blog from "./Blog"; 
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="text-center text-white bg-primary py-5">
        <div className="container" Style="padding:20px">
          <h1>Welcome to ANIKS Sol<sup>n</sup></h1>
          <p>Showcasing my work and experiences</p>
        </div>
      </section>

      {/* Blog Section */}
      <Blog limit="6" />

    </>
  );
};

export default Home;
