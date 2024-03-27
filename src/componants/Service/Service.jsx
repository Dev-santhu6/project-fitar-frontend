

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Service.css"
import "../../assets/css/style.css"
import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
import Shopform from "../shop/Shopregester"; // Import the Shopform component




const Service = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showShopForm, setShowShopForm] = useState(false); // Add state for showing the Shopform
  const [reviews, setReviews] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userinfo'));
    setIsLoggedIn(userInfo ? true : false);
  }, []);
  const handleDemoButtonClick = () => {
    if (isLoggedIn) {
      window.location=('/demo');
    } else {
      window.location=('/login');
    }
  };



  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/api/admin/getimages`);
        setImages(response.data?.images || []);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchImages();
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/api/review/verifyreview")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setReviews(data); // Filter only the reviews that are verified
        } else {
          console.error("Data is not an array:", data);
        }
      })
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);
  
  const handlePdfClick = (image) => {
    setSelectedImage(image);
    setShowPopup(true);
  };

  const handleimageClick = (image) => {
    setSelectedImage(image);
    setShowPopup(true);
  };

  const handleRequestClick = () => {
    setShowShopForm(true); // Show the Shopform when "Request!" button is clicked
  };

  const handleCloseShopForm = () => {
    setShowShopForm(false); // Close the Shopform
  };
  const formattedDate = new Date().toISOString().slice(0, 10);
  const getStarRating = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i} className="star">&#9733;</span>); // Full star
      } else {
        stars.push(<span key={i} className="star">&#9734;</span>); // Empty star
      }
    }
    return stars;
  };

  return (
    <section className='releaseservice' > 
     {/* // style={{height:"auto"}} */}
      <div>
        <div style={{ marginTop: "100px" }} >
          {images.map((image) => (
            <div key={image._id} className="image-item" > 
              <div className='releaseimage'>
                <img
                  src={image.url}
                  alt={image}
                  style={{ cursor: 'pointer' }}
                  onClick={() => handlePdfClick(image)}
                /> <br />
                {/* <span className='blink' onClick={() => handleimageClick(image)}>click me!</span> */}
              </div>
              <div style={{width:"60%"}}>
  <div style={{marginLeft:"200px",listStyle:"none",display:"flex",gap:"30px" }}>
    {reviews.map((review) => (
      <li key={review.email} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
          <button style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px', border: 'none', background: 'blue', color: 'white', fontWeight: 'bold' }}>{review.email.charAt(0)}</button>
          <div>
            <strong>{review.email}</strong>
          </div>
        </div>
        <div style={{ marginBottom: '5px' }}>
          {review.question4}
        </div>
        <div>
  <strong>Rating:</strong> {getStarRating(review.rating)}
</div>

      </li>
    ))}
  </div>
</div>

            </div>
            
          ))}
          {showPopup && selectedImage && (
            <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', borderRadius: '10px' }} className='popup'>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
                <button onClick={() => setShowPopup(false)} style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: '20px', color: "white" }}>×</button>
              </div>
              {formattedDate }
              <h6>version:{selectedImage.version}</h6>
              <div className='para'>
                <p>{selectedImage.description}</p>
              </div>
              <div class="containerbtn">
                {/* <button className="btn-get-started scrollto buttonbtn" onClick={handleDemoButtonClick}> <Link to="/demo">DEMO</Link> </button> */}
                <button className="btn-get-started scrollto buttonbtn" onClick={handleDemoButtonClick}> DEMO </button>

                <div><button className="btn-get-started scrollto buttonbtn" style={{ fontWeight: ("bolder"), fontFamily: "monospace" }} onClick={handleRequestClick}>Request!</button></div>
              </div>
            </div>
          )}
          {showShopForm && <Shopform onClose={handleCloseShopForm} />} {/* Render Shopform if showShopForm is true */}
        </div>
      </div>
     
    </section>
  );
};

export default Service;
