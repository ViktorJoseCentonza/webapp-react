import { NavLink } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import { useState } from "react"
function HeaderUi() {
    const { isLogged, logout } = useAuth()

    console.log(isLogged)
    return (
        <>
            <header className="d-flex justify-content-evenly align-items-center">
                <NavLink className="text-decoration-none" to="/" ><h1>ViktorFlix</h1></NavLink>
                <nav className="d-flex gap-4 text-decoration-none text-light fs-5 fw-bold">
                    <NavLink to="/" >Home</NavLink >
                    <NavLink to="#" >Popular</NavLink >
                    <NavLink to="#" >Our Favourites</NavLink >
                    {isLogged ? <span>Logged</span> : <NavLink to="/login" >Login</NavLink >}
                    <button onClick={() => {
                        logout();

                    }}>Log Out</button>

                </nav>
            </header >
        </>
    )
}

export default HeaderUi