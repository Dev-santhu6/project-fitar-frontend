// // components/CheckoutPage.js

// import React from 'react';
// import useElements  from '@stripe/react-stripe-js';
// import CheckoutForm from './CheckoutForm';

// const CheckoutPage = () => {
//   return (
//     <div>
//       <h1>Checkout Page</h1>
//       <useElements>
//         <CheckoutForm />
//       </useElements>
//     </div>
//   );
// };

// export default CheckoutPage;
import React from 'react';
import CheckoutForm from './CheckoutForm';

const CheckoutPage = () => {
  return (
    <div style={{marginTop:"100px"}}>
      <h2>Checkout Page</h2>
      <CheckoutForm />
    </div>
  );
};

export default CheckoutPage;

