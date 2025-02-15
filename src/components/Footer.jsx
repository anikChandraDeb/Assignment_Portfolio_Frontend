import React from "react";
import Blog from "./Blog"; 

const Home = () => {
  return (
    <>
      {/* Footer */}
      <div
    className="footer"
    style={{
        backgroundColor: "#0a0826",
        padding: "30px 0",
        color: "white",
        textAlign: "center",
        border:"10px"
    }}
    >
    <div className="container">
        <h2>Anik Chandra Deb</h2>
        <p>Copyright © 2025-{new Date().getFullYear()} Anik Chandra Deb <br/>All rights reserved.</p>
        <div className="d-flex justify-content-center gap-3">
        <button className="btn btn-secondary rounded-circle p-3" ></button>
        <button className="btn btn-secondary rounded-circle p-3" ></button>
        <button className="btn btn-secondary rounded-circle p-3" />
        <button className="btn btn-secondary rounded-circle p-3" />
        </div>
    </div>
</div>

    </>
  );
};

export default Home;
