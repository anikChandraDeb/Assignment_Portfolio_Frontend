// src/components/Sidebar.jsx
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="bg-dark text-white p-3" id="sidebar" style={{ minHeight: '100vh' }}>
            <h4 className="text-center mb-4">Dashboard</h4>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link text-white">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/dashboard/blog" className="nav-link text-white">
                        Manage Blogs
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/dashboard/team" className="nav-link text-white">
                        Manage Team
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/dashboard/service" className="nav-link text-white">
                        Manage Services
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
