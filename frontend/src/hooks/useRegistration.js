import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function useRegister() {
    const navigate = useNavigate();
    const [state, setState] = useState({
        status: "idle", // idle, loading, success, error
        message: "",
    });

    function register(username, email, password) {
        setState({ status: "loading", message: "" });

        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, email, password }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message === "User registered successfully") {
                    setState({
                        status: "success",
                        message: "Registration successful!",
                    });
                    // Optionally redirect user or perform additional logic
                    navigate("/login");
                } else {
                    setState({
                        status: "error",
                        message: data.message || "Registration failed",
                    });
                }
            })
            .catch((err) => {
                setState({
                    status: "error",
                    message: `Error: ${err}`,
                });
            });
    }

    return {
        register,
        status: state.status,
        message: state.message,
    };
}
