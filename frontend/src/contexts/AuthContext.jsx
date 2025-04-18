import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [isLogged, setIsLogged] = useState(false)
    const [userData, setUserData] = useState(null)
    const [state, setState] = useState({
        status: "idle", // idle, loading, success, error
        message: "",
    });

    //check token presence, if found check if valid and fetch user data
    useEffect(() => {
        console.log("token check running...");
        const token = localStorage.getItem("jwt_token");
        console.log(`token is ${token}`);

        if (token) {
            console.log("token found!")
            fetch('http://localhost:3000/users/auth', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Invalid token or failed request');
                    }
                    return res.json();
                })
                .then(data => {
                    // userData now contains your user's info
                    console.log("token verified! transferring user data...")
                    setIsLogged(true)
                    setUserData(data)
                })
                .catch(error => {
                    console.error('Authentication failed:', error);
                });
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
            value={{ isLogged, login, logout, state, userData }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth };