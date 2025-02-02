import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {

    localStorage.removeItem("token");


    sessionStorage.removeItem("token");


    document.cookie = "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // Redirect to login page
    navigate("/login");
  }, [navigate]);

  return null; 
};

export default Logout;
