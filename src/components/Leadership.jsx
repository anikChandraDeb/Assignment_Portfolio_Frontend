import React from "react";
import logo from '../assets/images/duetcs.jpg'

const LeadershipCard = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center fw-bold mb-4">Leadership</h2>
      <div className="row gx-3 gy-3">
        
        {/* Vice President */}
        <div className="col-md-6">
          <div className="card shadow-sm d-flex flex-row align-items-center p-3">
          <a href="https://www.duet.ac.bd/clubs-communities" target="_blank"><img src={logo} alt="DUET Logo" className="me-3" style={{ width: "100px", height: "100px" }} /></a>
          <div className="card-body">
              <h5 className="card-title fw-bold">Vice President</h5>
              <p className="card-text">DUET Computer Society</p>
              <p className="text-muted">October 2024 – Present</p>
            </div>
          </div>
        </div>

        {/* Former General Secretary */}
        <div className="col-md-6">
          <div className="card shadow-sm d-flex flex-row align-items-center p-3">
            <a href="https://www.duet.ac.bd/clubs-communities" target="_blank"><img src={logo} alt="DUET Logo" className="me-3" style={{ width: "100px", height: "100px" }} /></a>
            <div className="card-body">
              <h5 className="card-title fw-bold">Former General Secretary</h5>
              <p className="card-text">DUET Computer Society</p>
              <p className="text-muted">June 2023 - October 2024</p>
            </div>
          </div>
        </div>
        
      </div>
      <br />
    </div>
  );
};

export default LeadershipCard;
