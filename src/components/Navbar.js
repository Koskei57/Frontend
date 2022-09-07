import React from "react";

import { NavLink } from "react-router-dom"

const navLinks = {
    display: "inline",
    textDecoration: "none",
    fontSize: "18px",
    marginLeft: "15rem"
}
function NavBar() {
    return (
        <div>
            <NavLink to="/" style={navLinks}>Home</NavLink>
            <NavLink to="/author" style={navLinks}>Author info</NavLink>
            <NavLink to="/review" style={navLinks}>Review</NavLink>
        </div>
    )
}
export default NavBar;