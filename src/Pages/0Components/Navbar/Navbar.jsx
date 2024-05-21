import React, {useState} from "react";
import './Navbar.css';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [sidebarActive, setSidebarActive] = useState(false);

    const Width = () => {
        var width = window.innerWidth;
        if (width > 600){
            setSidebarActive(false);
        }
      }
    window.addEventListener('resize', Width)

    return(
        <div className="navbar-container">
            <div className="navbar-contents">
                <div className="navbar-res-wrapper">
                    <p className="logo-btn"><Link to='/' onClick={() => setSidebarActive(false)}>ANH</Link></p>
                    <button className="sidebar-toggle-btn" onClick={() => setSidebarActive(!sidebarActive)}>
                        {sidebarActive? <FontAwesomeIcon icon={faXmark}/> : <FontAwesomeIcon icon={faBars} />}
                        </button>
                </div>
                <div className="nav-links">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/projects'>Projects</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                {sidebarActive? 
                <div className="sidebar-nav-links">
                    <ul>
                        <li><Link to='/' onClick={() => setSidebarActive(false)}>Home</Link></li>
                        <li><Link to='/projects' onClick={() => setSidebarActive(false)}>Projects</Link></li>
                        <li><Link to='/contact' onClick={() => setSidebarActive(false)}>Contact</Link></li>
                    </ul>
                </div> : null}
            </div>
        </div>
    )
}

export default Navbar;