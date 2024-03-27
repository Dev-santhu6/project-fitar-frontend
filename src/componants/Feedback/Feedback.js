

import React, { useState } from "react";
import axios from "axios";
import "./Feedback.css";
import { useLocation } from 'react-router-dom';

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [question4, setQuestion4] = useState("");

  // const handleStarClick = (value) => {
  //   setRating(value);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_URL}/api/review/uploadreview`, {
        email,
        rating,
        question1,
        question2,
        question3,
        question4
      });
      window.location = "/"
      // Redirect or show success message
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  const location = useLocation();
  const email = new URLSearchParams(location.search).get('email');

  return (
    <section className="feedback" style={{height:"auto"}}>
    <div className="feedback">
      <div className="container1" style={{width:"70%",alignItems:"center",marginLeft:"15%"}}>
        <h1>Thanks for exploring AR-Webstore.</h1>
        <div>
          <form onSubmit={handleSubmit} >
            <div className="form-field">
              <label>
                What did you like the most about AR-Webstore ?
              </label>
              <textarea
                type="text"
                value={question1}
                onChange={(e) => setQuestion1(e.target.value)}
                placeholder="I would like to say ..."
                required
              ></textarea>
            </div>
            <div className="form-field">
              <label>
                Will our 3D and AR features improve your shopping
                experience if we integrate it on an online e-commerce
                store ?
              </label>
              <textarea
                type="text"
                value={question2}
                onChange={(e) => setQuestion2(e.target.value)}
                placeholder="I would like to say ..."
                required
              ></textarea>
            </div>
            <div className="form-field">
              <label>
                What are the other features that excite you to have them
                on AR-Webstore ?
              </label>
              <textarea
                type="text"
                value={question3}
                onChange={(e) => setQuestion3(e.target.value)}
                placeholder="I would like to say ..."
                required
              ></textarea>
            </div>
            <div className="form-field">
              <label>Any other comments?</label>
              <textarea
                type="text"
                value={question4}
                onChange={(e) => setQuestion4(e.target.value)}
                placeholder="I would like to say ..."
                required
              ></textarea>
            </div>
            <div className="form-field">
  <label>Rate our service:</label>
  <div className="star-rating">
    <input type="radio" id="star5" name="rating" value="5" onClick={() => setRating(5)} />
    <label htmlFor="star5"></label>
    <input type="radio" id="star4" name="rating" value="4" onClick={() => setRating(4)} />
    <label htmlFor="star4"></label>
    <input type="radio" id="star3" name="rating" value="3" onClick={() => setRating(3)} />
    <label htmlFor="star3"></label>
    <input type="radio" id="star2" name="rating" value="2" onClick={() => setRating(2)} />
    <label htmlFor="star2"></label>
    <input type="radio" id="star1" name="rating" value="1" onClick={() => setRating(1)} />
    <label htmlFor="star1"></label>
  </div>
</div>
            <button type="submit"  className="takeit scrollto btn-get-started " style={{ fontWeight: "bolder", fontFamily: "monospace" ,backgroundColor:"transparent",marginTop:"50px"}}>GET IT!</button>
          </form>
        </div>
      </div>
      <div>
       
      </div>
    </div>
    </section>
  );
};

export default Feedback;
