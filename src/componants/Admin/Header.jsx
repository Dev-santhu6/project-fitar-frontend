import React, { useState, useEffect } from 'react';
import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../../assets/css/style.css"
import "./admin.css"

import { Link } from "react-router-dom";

function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userinfo'));
    setIsLoggedIn(userInfo ? true : false);
  
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('userinfo');
    setIsLoggedIn(false);
    localStorage.removeItem('isAdmin');

    window.location = "/";
  };
    return (
      <div className="Navbar1">
    <header id="header" class="fixed-top " style={{  background:" linear-gradient(45deg, rgb(9, 2, 32) 0%, rgba(17, 0, 29, 0.944) 100%)"}}>
    <div class="container d-flex align-items-center justify-content-between">
     <Link to="/"> <h1 class="logo"> <img src={require("../../image/logo1.png")} alt="logo" />
      <img src={require("../../image/logo2.png")} alt="logo" /></h1> </Link>

      <nav id="navbar" class="navbar">
        <ul>
          <li><Link class="nav-link scrollto" to="/admin/userlist">USERS</Link></li>
          <li><Link class="nav-link scrollto " to="/admin/shoplist">SHOPDETAILS</Link></li>
          <li><Link class="nav-link scrollto" to="/admin/releses">Releases</Link></li>
          {/* <li><Link class="nav-link scrollto" to="/blog">BLOGS</Link></li> */}
          <li><Link class="nav-link  scrollto" to="/admin/review">REVIEW</Link></li>
{      !isLoggedIn ?(<li> <button></button></li>)  : (<li> <button className="getstarted scrollto running-border" onClick={handleLogout} style={{ backgroundColor: "transparent" }}>Logout</button></li>)
}
        </ul>
        <i class="bi bi-list mobile-nav-toggle" onClick={toggleMobileNav}></i>
      </nav>

    </div>
  </header>
      </div>
    );
  }
  
  export default Header;