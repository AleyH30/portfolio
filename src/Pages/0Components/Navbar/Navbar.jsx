import React, {useState} from "react";
import './Navbar.css';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [sidebarActive, setSidebarActive] = useState(false);

    return(
        <div className="navbar-container">
            <div className="navbar-contents">
                <p className="logo-btn"><Link to='/'>ANH</Link></p>
                <div className="nav-links">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/projects'>Projects</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <button className="sidebar-toggle-btn" onClick={() => setSidebarActive(!sidebarActive)}><FontAwesomeIcon icon={faBars} /></button>
            </div>
        </div>
    )
}

export default Navbar;