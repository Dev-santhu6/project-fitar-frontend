import React from "react";
import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../../assets/css/style.css"
import "./About.css"
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faRocket, faCheckCircle, faShoppingCart} from '@fortawesome/free-solid-svg-icons';



function About() {
  return (
    <div className="About">
      <section id="abouts" class="about hero-about">
        <div class="container">
<br/>
          <div class="row">
            <div class="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="150" style={{marginTop:"100px"}}>
              < img src={require("../../image/about.png")} style={{ marginTop:"40px",height:"700px"}} class="img-fluid moving-image" alt="" />
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
              
              <p class="fst-italic" >
             <span style={{fontFamily:"Poppins,sans-serif",marginTop:"80px", fontSize:"35px"}} >WHAT WE PROVIDE ?</span> 
             <ul>
              <li>        <FontAwesomeIcon icon={faMobileAlt} style={{height:"60px",marginTop:"10px"}}/>  Use augmented reality technology to see furniture in your room before you buy it.</li>
              <li> <FontAwesomeIcon icon={faCheckCircle} style={{height:"50px"}}/> AR-Webstore invites you to experience furniture purchasing of the future.</li>
              <li> <FontAwesomeIcon icon={faShoppingCart} style={{height:"40px"}}/> Goodbye to returns and welcome to purchases made with confidence.</li>
              <li> <FontAwesomeIcon icon={faRocket} style={{height:"40px"}}/> Transform your shopping experience with our immersive AR technology.</li>
             </ul>
              </p>
            </div>
          </div>
        </div>  
      </section>
     
      <Footer></Footer>
    </div>
  );
}

export default About;