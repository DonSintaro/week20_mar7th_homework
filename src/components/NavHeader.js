import React from "react";
import { Link, useLocation } from "react-router-dom";



function NavHeader() {


    const location = useLocation();


return (
    <div id="HeadingAreaOverLarge">
        <section id="headingArea"></section>

        <div className="container requiredSize">
            <div id="smallSpace"></div>

            <nav className="navbar navbar-expand-sm ">
                <a className="navbar-brand" href="#"> </a>
                <div className="special-nav-item" >
                    <h1 id="myName">Jeffrey Arriaga</h1>
                </div>
                
                {/* <!-- Links --> */}
                <ul className="navbar-nav smallerView">
                    
                    {/* <!-- Dropdown --> */}
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle links" href="#" id="navbardrop" data-toggle="dropdown">
                        Menu
                    </a>
                    <div className="dropdown-menu">

                        <div className="dropdown-item">
                            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Index</Link>
                        </div>
                        <div className="dropdown-item">
                            <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>Portfolio</Link>
                        </div>
                        <div className="dropdown-item">
                            <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact</Link>
                        </div>
                    
                    </div>
                    </li>
                </ul>

                <ul className="nav nav-bar-nav largerView" id="linksHead">
            
                    <li className="nav-item mt-1 mb-1 links">
                        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Index</Link>
                    </li>
                    <li className="nav-item mt-1 mb-1 links">
                        <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>Portfolio</Link>
                    </li>
                    <li className="nav-item mt-1 mb-1 links">
                        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact</Link>
                    </li>
                </ul>

            </nav>
                    
                
        </div>
    </div>
)
}


export default NavHeader;