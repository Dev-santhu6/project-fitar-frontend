import React, { useEffect } from 'react';


const Success = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/';
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);
  return (
    <div style={{marginTop:"100px",color:"green"}}>
      <h1>Payment Successful!</h1>
      <p>Your payment was successful. Thank you for your purchase.</p>
    </div>
  );
};

export default Success;
