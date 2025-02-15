import React from "react";
import '../assets/css/Animation.css'
const ProblemSolving = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center fw-bold mb-4">Problem Solving</h2>
      
      <div className="row gx-3 gy-3">
        {/* Codeforces */}
        <div className="col-md-4">
          <div className="card shadow-sm animation-card">
            <div className="card-body">
              <h5 className="card-title fw-bold">Codeforces</h5>
              <p className="card-text"><strong>Handle:</strong> <a href="https://codeforces.com/profile/_anik" target="_blank">_anik</a></p>
              <p className="card-text"><strong>Rank:</strong> Pupil</p>
              <p className="card-text"><strong>Max Rating:</strong> 1389</p>
              <p className="card-text"><strong>Solved:</strong> 1150+ problems</p>
              <p className="card-text"><strong>Contests:</strong> 127+ participations</p>
            </div>
          </div>
        </div>

        {/* CodeChef */}
        <div className="col-md-4">
          <div className="card shadow-sm animation-card">
            <div className="card-body">
              <h5 className="card-title fw-bold">CodeChef</h5>
              <p className="card-text"><strong>Handle:</strong> <a href="https://www.codechef.com/users/anik234" target="_blank">anik234</a></p>

              <p className="card-text"><strong>Rank:</strong> 3-Star</p>
              <p className="card-text"><strong>Max Rating:</strong> 1648</p>
              <p className="card-text"><strong>Solved:</strong> ~100 problems</p>
              <p className="card-text"><strong>Contests:</strong> 18 participations</p>

            </div>
          </div>
        </div>
        {/* Leetcode */}
        <div className="col-md-4">
          <div className="card shadow-sm animation-card">
            <div className="card-body">
              <h5 className="card-title fw-bold">Leetcode</h5>
              <p className="card-text"><strong>Handle:</strong> <a href="https://leetcode.com/u/_anik/" target="_blank">_anik</a></p>

              <p className="card-text"><strong>Rank:</strong> Top 29.49% </p>
              <p className="card-text"><strong>Max Rating:</strong> 1,559</p>
              <p className="card-text"><strong>Solved:</strong> ~100 problems</p>
              <p className="card-text"><strong>Contests:</strong> 1 participations</p>

            </div>
          </div>
        </div>
        {/* HackerRank */}
        <div className="col-md-4">
          <div className="card shadow-sm animation-card">
            <div className="card-body">
              <h5 className="card-title fw-bold">HackerRank</h5>
              <p className="card-text"><strong>Handle:</strong> <a href="https://www.hackerrank.com/profile/_anik" target="_blank">_anik</a></p>
              <p className="card-text"><strong>Rank:</strong> 3* Problem Solving</p>
              <p className="card-text"><strong>Solved:</strong> 100+ problems</p>
              
            </div>
          </div>
        </div>
        {/* CSES */}
        <div className="col-md-4">
          <div className="card shadow-sm animation-card">
            <div className="card-body">
              <h5 className="card-title fw-bold">CSES</h5>
              <p className="card-text"><strong>Handle:</strong> <a href="https://judge.beecrowd.com/en/users/statistics/186043" target="_blank">Anik234</a></p>
              <p className="card-text"><strong>Rank:</strong> </p>
              <p className="card-text"><strong>Solved:</strong> 50+ problems</p>
              
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm animation-card">
            <div className="card-body">
                <h5 className="card-title fw-bold">Beecrowd</h5>

                <p className="card-text"><strong>Handle:</strong> <a href="#" target="_blank">anik204062</a></p>
                <p className="card-text"><strong>Rank:</strong> </p>
                <p className="card-text"><strong>Solved:</strong>  188+ problems</p>
              
            </div>
          </div>
        </div>

      </div>
      <br />
    </div>
  );
};

export default ProblemSolving;
