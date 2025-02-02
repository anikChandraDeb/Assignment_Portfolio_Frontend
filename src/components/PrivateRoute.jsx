// src/components/PrivateRoute.jsx
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute = () => {
    const isAuthenticated = localStorage.getItem("token");  // Check login token
    
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
