import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove authentication token from localStorage
    localStorage.removeItem("token");

    // Remove authentication token from sessionStorage (if used)
    sessionStorage.removeItem("token");

    // Remove authentication-related cookies
    document.cookie = "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // Redirect to login page
    navigate("/login");
  }, [navigate]);

  return null; // No UI, just performs logout
};

export default Logout;
