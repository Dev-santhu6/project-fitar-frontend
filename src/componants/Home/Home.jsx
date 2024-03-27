import { React} from "react";
import Footer from "../Footer/Footer";
// import ShopForm from "../shop/Shopregester";
import { Link } from "react-router-dom";

import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../../assets/css/style.css"
function Home() {

  return (
   
    <div className="Home">
      <section id="hero" class="d-flex align-items-center">

        <div class="container-fluid" data-aos="fade-up">
          <div class="row justify-content-center">
            <div class="col-xl-5 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <p style={{ fontSize: ("50px"), fontWeight: ("bolder") }}>Better Digital Experience With FITAR</p>
              <h2 style={{ fontSize: ("30px"), color: "white" }}>Increase Your Business Better<br />Joining FITAR</h2>
              <div>
                <button className="btn-get-started scrollto running-border getstarted" style={{ fontWeight: ("bolder"), fontFamily: "monospace", backgroundColor: "transparent", color: "white" }} > <Link to="/services">EXPLORE</Link>   </button>

              </div>
            </div>
            <div class="col-xl-4 col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="150">
              <img src={require("../../image/hero.png")} class="img-fluid animated" alt="" />
            </div>
          </div>
        </div>

      </section>
      
      <Footer />

    </div>
  );
}

export default Home;














// https://buy.stripe.com/test_00gcO13UFdopeWc9AA