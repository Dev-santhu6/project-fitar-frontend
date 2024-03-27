import React,{useState} from "react";


function Footer() {
  const [email, setEmail] = useState('');
  // const history = createBrowserHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    window.location =(`/feedback?email=${email}`)


  };
    return (
      <div className="Footer" style={{display:"grid"}}>
       <footer id="footer">

<div class="footer-top">
  <div class="container">
    <div class="row">

      <div class="col-lg-3 col-md-6 footer-contact">
        <h3>FITAR</h3>
        <p>
          NUNAVI WEST<br/>
          CHAVAKACHCHERI<br/>
          JAFFNA<br/><br/>
          <strong>Phone:</strong> 0770695944<br/>
          <strong>Email:</strong> fitarservice@gmail.com<br/>
        </p>
      </div>

      <div class="col-lg-2 col-md-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><i class="bx bx-chevron-right"></i> <a href="/">Home</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="/about">About us</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="/">Services</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="/demo">Demo</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="/feedback">Feedback</a></li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-6 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li><i class="bx bx-chevron-right"></i> <a href="#2">Web Development</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#2">Provide the Reality E-Commerce</a></li>
          {/* <li><i class="bx bx-chevron-right"></i> <a href="#2">Marketing</a></li> */}
          <li><i class="bx bx-chevron-right"></i> <a href="#2">3D Design</a></li>
        </ul>
      </div>

      <div class="col-lg-4 col-md-6 footer-newsletter">
        <h4>Give A Feedback For Our Future Work</h4>
        <form action="" method="post" onSubmit={handleSubmit}>
          <input type="email" name="email" 
          value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
     style={{border:"none",outline:"none"}} />  <input type="submit" value="Subscribe"/> 
        </form>
      </div>

    </div>
  </div>
</div>


</footer>
      </div>
    );
  }
  
  export default Footer;