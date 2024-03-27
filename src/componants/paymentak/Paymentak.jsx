import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';



const buttonStyle = {
  marginRight: "15px",
  padding:"5px"
};

const Paymentak = () => {
  const info = JSON.parse(localStorage.getItem("userInfo"));
  const design =JSON.parse(localStorage.getItem('order'));

  // const [product, setProduct] = useState({
  //   name: "Order payment",
  //   price: 0, // Initial price set to 0
  //   productBy: "Noolody"
  // });

  // const [customAmount, setCustomAmount] = useState(""); // State to store custom amount input

  // const handleAmountChange = (e) => {
  //   const amount = parseFloat(e.target.value) * 100; // Convert to cents
  //   setProduct({ ...product, price: amount });
  //   setCustomAmount(e.target.value);
  // };

  const makePayment = async (token) => {

    const body = {
      token,
     

    };
    const headers = {
      'Content-Type': "application/json"
    };

    try {
      const response = await fetch('http://localhost:5000/api/paymentak', {
        method: 'POST',
        body: JSON.stringify(body),
        headers
      });
      console.log(response);
      // if (!response.ok) {
      //   throw new Error('Response failed');
      // }

      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div  style={{marginTop:"100px"}}>
      {/* <label style={buttonStyle}>
        Enter custom amount:
        <input
          type="number"
          value={customAmount}
          onChange={handleAmountChange}
          
       
        />
      </label> */}

      <StripeCheckout
        // name={design.name}
        // amount={design.price * 100
        // }
        currency="lkr"
        token={makePayment}
        stripeKey="pk_test_51OoJ6HLVCHRJpIbwFzteE8MyfGV4aFwrGJNY2dUZW0KY4QnspufC86vgbnw5kxQdIIuGPwn2dP7TZQORA39QfH8Q00tIHCIZNv"
      >
        <button style={{width:'20%'}}>Pay LKR</button>
        
      </StripeCheckout>
    </div>
  );
};

export default Paymentak;