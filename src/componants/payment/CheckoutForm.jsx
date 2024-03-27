// // import React from 'react';
// // import { CardElement, useStripe } from '@stripe/react-stripe-js';
// // import axios from 'axios';

// // const CheckoutForm = () => {
// //   const stripe = useStripe();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const { token } = await stripe.createToken();

// //     try {
// //       const response = await axios.post('http://localhost:5000/api/payment/payment', {
// //         amount: 1000, // Example amount (in cents)
// //         currency: 'usd',
// //         paymentMethodId: token.id,
// //       });

// //       console.log(response.data);
// //     } catch (err) {
// //       console.error(err.response.data.error);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <CardElement />
// //       <button type="submit">Pay</button>
// //     </form>
// //   );
// // };

// // export default CheckoutForm;

// // CheckoutForm.jsx
// // components/CheckoutForm.js

// // import React from 'react';
// // import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
// // import axios from 'axios';

// // const CheckoutForm = () => {
// //   const stripe = useStripe();
// //   const elements = useElements();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!stripe || !elements) {
// //       console.error('Stripe.js has not yet loaded.');
// //       return;
// //     }

// //     const cardElement = elements.getElement(CardElement);

// //     if (!cardElement) {
// //       console.error('Card element not found.');
// //       return;
// //     }

// //     const { token, error } = await stripe.createToken(cardElement);

// //     if (error) {
// //       console.error(error.message);
// //       return;
// //     }

// //     try {
// //       const response = await axios.post('http://localhost:5000/api/payment/payments', {
// //         amount: 1000, // Example amount (in cents)
// //         currency: 'usd',
// //         token: token.id,
// //       });

// //       console.log(response.data);
// //     } catch (err) {
// //       console.error(err.response.data.error);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <CardElement />
// //       <button type="submit">Pay</button>
// //     </form>
// //   );
// // };

// // export default CheckoutForm;

// import React, { useState } from 'react';
// import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
// import axios from 'axios';
// // import { useHistory } from 'react-router-dom';

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!stripe || !elements) {
//       console.error('Stripe.js has not yet loaded.');
//       return;
//     }

//     const cardElement = elements.getElement(CardElement);

//     if (!cardElement) {
//       console.error('Card element not found.');
//       return;
//     }

//     const { token, error } = await stripe.createToken(cardElement);

//     if (error) {
//       console.error(error.message);
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:5000/api/payment/payments', {
//         amount: 1000, // Example amount (in cents)
//         currency: 'usd',
//         token: token.id,
//       });

//       setMessage('Payment successful. Redirecting...');
//       setTimeout(() => {
//          window.location = ('/success');
//       }, 3000);
//     } catch (err) {
//       setMessage('Payment failed. Redirecting...');
//       setTimeout(() => {
//          window.location = ('/notfound');
//       }, 3000);
//     }
//   };

//   return (
//     <div className='payment'>
//     <div className="form-container">
//       <form onSubmit={handleSubmit}>
//         <CardElement />
//         <button type="submit" className="button">Pay</button>
//       </form>
//       {message && <div className={`message ${message.includes('successful') ? 'success' : 'error'}`}>{message}</div>}
//     </div>
//     </div>
//   );
// };

// export default CheckoutForm;

// import React, { useState } from 'react';
// import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

// const PaymentForm = ({ clientSecret }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [error, setError] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements || !clientSecret) {
//       return;
//     }
  
//     const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: elements.getElement(CardElement),
//         billing_details: {
//           name: 'John Doe',
//         },
//       },
//     });
   
//     if (error) {
//       setError(error.message);
//       setTimeout(() => {
//         window.location='/notfound'; // Redirect to notfound page after 3 seconds
//       }, 1000);
//     } else {
//       // Payment successful
//       setTimeout(() => {
//         window.location=('/success'); // Redirect to success page after 3 seconds
//       }, 1000);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{marginTop:"100px"}}>
//       <CardElement />
//       <button type="submit" disabled={!stripe}>
//         Pay
//       </button>
//       {error && <div>{error}</div>}
//     </form>
//   );
// };

// export default PaymentForm;



import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
// import { v4 as uuidv4 } from 'uuid';


const PaymentForm = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      return;
    }

    const button = event.target.querySelector('button[type="submit"]');
    button.disabled = true; // Disable the submit button

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'John Doe',
        },
      },
    });

    button.disabled = false; // Re-enable the submit button

    if (error) {
      setError(error.message);
      setTimeout(() => {
        window.location = '/notfound'; // Redirect to notfound page after 1 second
      }, 5000);
    } else {
      // Payment successful
      setTimeout(() => {
        window.location = '/success'; // Redirect to success page after 1 second
      }, 5000);
     
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "100px" }}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default PaymentForm;
