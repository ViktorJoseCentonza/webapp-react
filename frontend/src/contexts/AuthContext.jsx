import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [isLogged, setIsLogged] = useState(false)
    const [state, setState] = useState({
        status: "idle", // idle, loading, success, error
        message: "",
    });

    useEffect(() => {
        const token = localStorage.getItem("jwt_token");
        if (token) {
            setIsLogged(true)
        } else {
            setIsLogged(false); // No token found, user is not logged in
        }
    }, []);

    const login = (email, password, navigate) => {

        setState({ status: "loading", message: "" });

        fetch("http://localhost:3000/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.token) {

                    localStorage.setItem("jwt_token", data.token);
                    setIsLogged(true);

                    setState({
                        status: "success",
                        message: "Login successful!",
                    });

                    navigate("/");
                } else {
                    setState({
                        status: "error",
                        message: data.message || "Login failed",
                    });
                }
            })
            .catch((err) => {
                setState({
                    status: "error",
                    message: `Error: ${err}`,
                });
            });

    };

    const logout = () => {
        localStorage.removeItem("jwt_token");
        setIsLogged(false);
    };

    return (
        <AuthContext.Provider
            value={{ isLogged, login, logout, state }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth };