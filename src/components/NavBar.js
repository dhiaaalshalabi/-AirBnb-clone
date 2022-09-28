import React from "react"
import AirBnbLogo from '../images/airbnb-logo.png'
function Navbar() {
    return (
        <nav>
            <img src={AirBnbLogo} alt='' className="nav-logo" />
        </nav>
    )
}

export default Navbar
