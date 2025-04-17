import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext"; // Adjust the path accordingly
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login, state } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Call the login function from the hook
        login(email, password, navigate);

        console.log("Login attempt:", { email, password });
    };

    return (
        <div className="container d-flex align-items-center justify-content-center mt-5 pt-5">
            <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
                <h2 className="text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="Enter email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Sign In
                    </button>
                </form>

                {/* Handle status & message */}
                {status === "loading" && <p>Loading...</p>}
                {status === "error" && <p className="text-danger">{message}</p>}
                {status === "success" && <p className="text-success">{message}</p>}

                <div className="text-center mt-3">
                    <small>
                        Don't have an account? <a href="/register">Register</a>
                    </small>
                </div>
            </div>
        </div>
    );
}
