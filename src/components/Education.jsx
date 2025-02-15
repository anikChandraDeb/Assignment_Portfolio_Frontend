import "../assets/css/Animation.css"; // Import the CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
import duet from '../assets/images/duet.png'

const Education = () => {
  return (
    <div className="container mt-4">
    <h2 className="text-center fw-bold mb-4">Education</h2>

    <div className="card mb-3 shadow-sm animation-card">
        <div className="card-body">
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <div>
            <img src={duet} alt="a" style={{ width: "80px", height: "80px", marginRight: "15px" }} />
            </div>
            <div>
            <h5 className="card-title fw-bold">B.Sc. in Computer Science & Engineering</h5>
            <p className="card-text">Dhaka University of Engineering & Technology (DUET)</p>
            <p className="text-muted">Expected Graduation: July 2025</p>
            <p className="text-muted">CGPA: 3.61 (Current)</p>
            </div>
        </div>
        </div>
    </div>
    </div>

  );
};

export default Education;
