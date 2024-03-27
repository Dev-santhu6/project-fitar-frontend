import React, { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/';
    }, 5000); 
    return () => clearTimeout(timer);
  }, []);
  return (
    <div style={{marginTop:"100px",color:"red"}}>
      <h1>Payment Failed</h1>
      <p>Your payment was unsuccessful. Please try again later.</p>
    </div>
  );
};

export default NotFound;
