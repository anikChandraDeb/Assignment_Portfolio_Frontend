import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Blog from './components/Blog.jsx';
import Service from './components/Service.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';
import DashboardNavbar from './components/DashboardNavbar.jsx';  // Import the Dashboard Navbar
import PrivateRoute from './components/PrivateRoute';  // Import PrivateRoute
import Dashboard from './components/Dashboard.jsx';
import DashboardBlog from './components/DashboardBlog.jsx';
import DashboardTeam from './components/DashboardTeam.jsx';
import DashboardService from './components/DashboardService.jsx';
import BlogDetail from './components/BlogDetail.jsx';
import Profile from './components/Profile.jsx'
import Logout from './components/Logout.jsx';



function App() {
    return (
        <Router>
            <RouteHandler />
        </Router>
    );
}

const RouteHandler = () => {
    const location = useLocation();

    // Check if we are on the dashboard route
    const isDashboard = location.pathname.startsWith("/dashboard");
    const loginCheck= location.pathname=='/login';


    return (
        <>
            {/* Conditionally render the navbar */}
            {isDashboard ? <DashboardNavbar /> :loginCheck?null:<Navbar />}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:blogId" element={<BlogDetail />} />
                <Route path="/service" element={<Service />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />

                {/* Protected Dashboard Routes */}
                <Route element={<PrivateRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/dashboard/blog" element={<DashboardBlog />} />
                    <Route path="/dashboard/team" element={<DashboardTeam />} />
                    <Route path="/dashboard/service" element={<DashboardService />} />
                    <Route path="/dashboard/profile" element={<Profile />} />
                    <Route path="/dashboard/logout" element={<Logout />} />
                </Route>
            </Routes>

            {/* Conditionally render Footer */}
            {isDashboard ? null : loginCheck? null :<Footer />}
        </>
    );
}

export default App;
