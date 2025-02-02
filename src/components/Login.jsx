import React, { useState,useEffect } from "react";

import { useNavigate } from "react-router-dom";
import api from "../axios"; 
import Cookies from 'js-cookie';
import '../assets/css/Login.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        const handleBackButton = () => {
            navigate("/", { replace: true }); 
        };

        window.addEventListener("popstate", handleBackButton);

        return () => {
            window.removeEventListener("popstate", handleBackButton);
        };
    }, [navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post("/login", { email, password });
            localStorage.setItem("token", response.data.token); 
            Cookies.set("authToken", response.data.token, {
                expires: 1, // 1 day
                path: "/",
                sameSite: "None",
                secure: true, 
            });
            console.log(response)
            navigate("/dashboard"); 
        } catch (err) {
            if (err.response) {
                setError(err.response.data.message); // Show backend error message
            } else {
                setError("Something went wrong. Please try again.");
            }
        }
    };

    return (
        <section className="login-section">
            <div className="container text-center d-flex justify-content-center height">
                <div className="col-md-4 horizon-center">
                    <div className="login-card">
                        <h2 className="section-title">🔑 ANIK'S Sol<sup>n</sup> Login</h2>
                        <form onSubmit={handleLogin}>
                            {error && <p className="error-text">{error}</p>}
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <br />
                            <button type="submit" className="btn btn-dark w-100">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
