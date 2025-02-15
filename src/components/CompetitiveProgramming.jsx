import React from "react";
import '../assets/css/Animation.css'

const CompetitiveProgrammingCard = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center fw-bold mb-4">Competitive Programming Experience</h2>
      
      {/* Row for the grid */}
      <div className="row gx-2 gy-3">

        {/* ICPC Asia Dhaka Regional Contest 2024 */}
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm animation-card"  style={{minHeight:"170px"}}>
            <div className="card-body">
              <h5 className="card-title fw-bold">ICPC Asia Dhaka Regional Contest 2024</h5>
              
              <p className="card-text custom-card-text"><strong>Team:</strong> DUET_RAD</p>
              <p className="card-text custom-card-text"><strong>Rank:</strong> 49th among 309 teams</p>
            </div>
          </div>
        </div>

        {/* ICPC Asia Dhaka Regional Preliminary Contest 2024 */}
        <div className="col-md-4 mb-3">
        <div className="card shadow-sm animation-card"  style={{minHeight:"170px"}}>
            <div className="card-body">
              <h5 className="card-title fw-bold">ICPC Asia Dhaka Regional Preliminary Contest 2024</h5>
              
              <p className="card-text custom-card-text"><strong>Team:</strong> DUET_RAD</p>
              <p className="card-text custom-card-text"><strong>Rank:</strong> 162nd rank out of around 2500 teams</p>
            </div>
          </div>
        </div>

        {/* Techfest, IIT Bombay, Bangladesh Zonal 2024 */}
        <div className="col-md-4 mb-3">
        <div className="card shadow-sm animation-card"  style={{minHeight:"170px"}}>
            <div className="card-body">
              <h5 className="card-title fw-bold">Techfest, IIT Bombay, Bangladesh Zonal 2024</h5>
              <p className="card-text custom-card-text"><strong>Team:</strong> DUET_Exception</p>
              
              <p className="card-text custom-card-text"><strong>Rank:</strong> Secured 5th place & qualified for Techfest, IIT Bombay 2024 Main Round.</p>
            </div>
          </div>
        </div>

        {/* NCPC 2024 Finalist */}
        <div className="col-md-4 mb-3">
        <div className="card shadow-sm animation-card"  style={{minHeight:"170px"}}>
            <div className="card-body">
              <h5 className="card-title fw-bold">NCPC Onsite 2023 Hosted by JU</h5>
              <p className="card-text custom-card-text"><strong>Team:</strong> DUETWABoys</p>
              <p className="card-text custom-card-text"><strong>Rank:</strong> 126th among 196 teams</p>
            </div>
          </div>
        </div>

        {/* Inter University Programming Contest at CoU 2023 */}
        <div className="col-md-4 mb-3">
        <div className="card shadow-sm animation-card"  style={{minHeight:"170px"}}>
            <div className="card-body">
              <h5 className="card-title fw-bold custom-card-text">Inter University Programming Contest at CoU 2023</h5>
              <p className="card-text custom-card-text"><strong>Team:</strong> JellyBean++</p>
              
              <p className="card-text custom-card-text"><strong>Rank:</strong> 42nd among 70+ teams.</p>
            </div>
          </div>
        </div>

        {/* Inter University Junior Programming Contest at SEC 2022 */}
        <div className="col-md-4 mb-3">
        <div className="card shadow-sm animation-card"  style={{minHeight:"170px"}}>
            <div className="card-body">
              <h5 className="card-title fw-bold custom-card-text">Inter University Junior Programming Contest at SEC 2022</h5>
              <p className="card-text custom-card-text"><strong>Team:</strong> DUET_ComplexCoders</p>
              
              <p className="card-text custom-card-text"><strong>Rank:</strong> 39th among 82 teams.</p>
            </div>
          </div>
        </div>

        {/* Intra DUET Programming Contest */}
        <div className="col-md-4 mb-3">
        <div className="card shadow-sm animation-card"  style={{minHeight:"170px"}}>
            <div className="card-body">
              <h5 className="card-title fw-bold custom-card-text">Intra DUET Programming Contest</h5>
              <p className="card-text custom-card-text"><strong>Team:</strong> Individual</p>
              
              <p className="card-text custom-card-text"><strong>Rank: </strong> 
                 IDPC 2024(Secure 4th place out of 30 participants), 
                IDPC 2023, 
                IDPC 2022(Secure 2nd position out of around 50 participants.)
              </p>
            </div>
          </div>
        </div>

        {/* ICPC Asia Dhaka Regional Contest 2019 */}
        <div className="col-md-4 mb-3">
        <div className="card shadow-sm animation-card"  style={{minHeight:"170px"}}>
            <div className="card-body">
              <h5 className="card-title fw-bold custom-card-text">ICPC Asia Dhaka Regional Contest 2019</h5>
              <p className="card-text custom-card-text"><strong>Team:</strong> AnikHalalDipu</p>
              
              <p className="card-text custom-card-text"><strong>Status:</strong> Finalist</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CompetitiveProgrammingCard;
