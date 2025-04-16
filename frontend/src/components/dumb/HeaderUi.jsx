import { NavLink } from "react-router-dom"
function HeaderUi() {
    return (
        <>
            <header className="d-flex justify-content-evenly align-items-center">
                <h1>ViktorFlix</h1>
                <nav className="d-flex gap-4 text-decoration-none text-light fs-5 fw-bold">
                    <NavLink to="/" >Home</NavLink >
                    <NavLink to="#" >Recent</NavLink >
                    <NavLink to="#" >Popular</NavLink >
                    <NavLink to="#" >Our Favourites</NavLink >

                </nav>
            </header >
        </>
    )
}

export default HeaderUi