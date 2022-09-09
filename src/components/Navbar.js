import React from "react";

import { NavLink } from "react-router-dom"

const navLinks = {
    display: "inline",
    color: "Black",
    textDecoration: "none",
    fontSize: "25px",
    marginLeft: "15rem"
}
function NavBar() {
    return (
        <div className="relative w-full flex flex-wrap items-center justify-even py-3 bg-[#FCB500] shadow-lg h-20 navbar navbar-expand-lg navbar-light">
            <NavLink className="nav-item p-2"  to="/" style={navLinks}>Home</NavLink>
            <NavLink className="nav-item p-2"   to="/author" style={navLinks}>Author </NavLink>
            <NavLink className="nav-item p-2"  to="/review" style={navLinks}>Review</NavLink>
        </div>
    )
}
export default NavBar;