


import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../../assets/css/style.css"
import "./Navbar.css"

// import "../../assets/js/main.js"
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
// import {  useLocation } from 'react-router-dom';


function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const[isUserEmail,setUserEmail]= useState(false);
 
  const isAdmin = localStorage.getItem("isAdmin") === "true";


  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userinfo'));
    setIsLoggedIn(userInfo ? true : false);
    setUserEmail(userInfo ? userInfo.email : null);
  }, []);
 
  const Email=localStorage.getItem('userinfo')
  const handleLogout = () => {
    localStorage.removeItem('userinfo');
    setIsLoggedIn(false);
    localStorage.removeItem('isAdmin');
    window.location = "/"
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
   
    const [isDropdownmenuOpen, setIsDropdownmenuOpen] = useState(false);

    const togglemenuDropdown = () => {
      setIsDropdownmenuOpen(!isDropdownmenuOpen);
    };




  return (
    <div className="Navbar">
      <header id="header" class="fixed-top ">
        <div class="container d-flex align-items-center justify-content-between">
          <h1 class="logo"><a href="/demo"> <img src={require("../../image/logo1.png")} alt="logo" />
            <img src={require("../../image/logo2.png")} alt="logo" /></a></h1>

          <nav id="navbar" class="navbar">
            <ul>
              <li><Link class="nav-link scrollto " to="/">Home</Link></li>
              <li><Link class="nav-link scrollto" to="/about">About</Link></li>
              {/* <li><Link class="nav-link scrollto " to="/demo">Demo</Link></li> */}
              <li><Link class="nav-link scrollto" to="/services">Releases</Link></li>
              {/* <li><Link class="nav-link scrollto" to="/blog">Blog</Link></li> */}

              {/* <li><Link class="getstarted scrollto running-border" to="/login">Login</Link></li> */}
              {isAdmin && <li><Link to="/admin">Dashboard</Link></li>}
             
              {!isLoggedIn ? (
                <li><Link className="getstarted scrollto running-border" to="/login">Login</Link></li>
              ) : (
                <li>
                {/* <button onClick={toggleDropdown} style={{height:"50px",width:"50px",borderRadius:"50%"}} className="running-border profile" >{Email.charAt(0)} </button> */}
                <button onClick={toggleDropdown}  style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px',  backgroundColor:"transparent" ,color: 'white', fontWeight:"800" ,fontSize:"30px",}} className="running-border">{Email.charAt(1).toUpperCase()}</button>

                {isDropdownOpen && (
                  <div className="dropdown-content">
                    <button className="getstarted scrollto running-border" > <Link to="/profile" style={{ backgroundColor: "transparent" }}>  profile  </Link></button>
                    {/* <button className="getstarted scrollto running-border" >sayhi</button> */}
                    <button className="getstarted scrollto running-border" onClick={handleLogout} style={{ backgroundColor: "transparent" }}>Logout</button>
                    
                  </div>
                )}
              </li>
              )}
             
            </ul>
            <i class="bi bi-list mobile-nav-toggle"  onClick={togglemenuDropdown} style={{marginRight:"10px"}}></i>
            {isDropdownmenuOpen && (
                  <div className="dropdown-content" style={{marginRight:"500px"}}>
              <li><Link class="nav-link scrollto " to="/">Home</Link></li>
              <li><Link class="nav-link scrollto" to="/about">About</Link></li>
              <li><Link class="nav-link scrollto" to="/services">Services</Link></li>
              <li><Link className="nav-link scrollto running-border" to="/login" style={{marginRight:"400px"}}>Login</Link></li>
                  </div>
                )}
          </nav>

        </div>
      </header>

    </div>
  );
}

export default Navbar;
