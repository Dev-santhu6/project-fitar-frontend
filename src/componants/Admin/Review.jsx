

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/api/review/getreview`);
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };
    fetchReviews();
  }, []);

  const handleVerify = async (email) => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_URL}/api/review/updatereview/${email}`, { ispost: true });
      setReviews(reviews.map(review => review.email === email ? response.data : review));
    } catch (error) {
      console.error('Error verifying review:', error);
    }
  };

  const handleDelete = async (email) => {
    try {
      await axios.delete(`${process.env.REACT_APP_URL}/api/review/deletereview`, { data: { email } });
      setReviews(reviews.filter(review => review.email !== email));
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  return (
    <div style={{ marginTop: '100px' }}>
      <table className="table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Question 1</th>
            <th>Question 2</th>
            <th>Question 3</th>
            <th>Question 4</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review._id}>
              <td>{review.email}</td>
              <td>{review.question1}</td>
              <td>{review.question2}</td>
              <td>{review.question3}</td>
              <td>{review.question4}</td>
              <td>{review.rating}</td>
              <td>
                <button className="btn btn-success btn-sm" onClick={() => handleVerify(review.email)}>Verify <i className="bi bi-patch-check"></i></button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(review.email)}>Delete <i className="bi bi-trash"></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;





