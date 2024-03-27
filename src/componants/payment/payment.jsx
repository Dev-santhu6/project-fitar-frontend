// Payment.jsx
// import React from 'react';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import CheckoutForm from './CheckoutForm';

// const stripePromise = loadStripe('pk_test_51OoJ6HLVCHRJpIbwFzteE8MyfGV4aFwrGJNY2dUZW0KY4QnspufC86vgbnw5kxQdIIuGPwn2dP7TZQORA39QfH8Q00tIHCIZNv');

// const Payment = () => {
//   return (
//     <div style={{marginTop:"100px"}}>
//     <Elements stripe={stripePromise}>
//       <CheckoutForm />
//     </Elements>
//     </div>
//   );
// };

// export default Payment;
import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from "./CheckoutForm"
// import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid'; // Import the uuid package



const stripePromise = loadStripe('pk_test_51OoJ6HLVCHRJpIbwFzteE8MyfGV4aFwrGJNY2dUZW0KY4QnspufC86vgbnw5kxQdIIuGPwn2dP7TZQORA39QfH8Q00tIHCIZNv');
const Checkout = () => {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/payment/payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: 1000, currency: 'usd' }),
    })
  // useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.post('http://localhost:5000/api/payment/payment-intent', {
    //       amount: 1000, // Example amount (in cents)
    //       currency: 'usd',
    //     });
    //     setClientSecret(response.data.clientSecret);
    //   } catch (error) {
    //     console.error('Error:', error);
    //   }
    // };
  
  //   fetchData();
  // }, []);
    .then(res => res.json())
    .then(data => {
      if (data.clientSecret) {
        setClientSecret(data.clientSecret);
      } else {
        console.error('Failed to get client secret:', data.error);
      }
   })
    .catch(err => console.error('Error:', err));
}, []);
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm clientSecret={clientSecret} />
    </Elements>
  );
};

export default Checkout;

