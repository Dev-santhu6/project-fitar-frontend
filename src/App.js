// import './App.css';
// import "@google/model-viewer/dist/model-viewer.min.js";
// import { useState } from 'react';

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import About from './componants/About/About';
// import Feedback from './componants/Feedback/Feedback';
// // import Footer from './componants/Footer/Footer';
// import Home from './componants/Home/Home';
// import Navbar from './componants/Navbar/Navbar';
// import Service from './componants/Service/Service';
// import Login from './componants/SignIn/Signin';
// import SignUp from './componants/SignUp/SignUp';
// import Shopform from './componants/shop/Shopregester';
// import ProductList from './componants/demos/democomponents/ProductList/ProductList';
// import Admin from './componants/Admin/admindash';
// // import CheckoutPage from './componants/payment/CheckoutPage';
// import Success from './componants/payment/success';
// import NotFound from './componants/payment/notfound';
// import Checkout from './componants/payment/payment';
// // import Payment from './componants/payment/payment';






// const stripePromise = loadStripe('pk_test_51OoJ6HLVCHRJpIbwFzteE8MyfGV4aFwrGJNY2dUZW0KY4QnspufC86vgbnw5kxQdIIuGPwn2dP7TZQORA39QfH8Q00tIHCIZNv');


// function App() {

//   // const location = useLocation();
//   // const isAdminPage = location.pathname.startsWith('/admin');

//   const [clickCount, setClickCount] = useState(0);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const handleContextMenu = (e) => {
//     e.preventDefault();
//     setClickCount((prevCount) => prevCount + 1);

//     if (clickCount === 2) {
//       setIsDarkMode((prevMode) => !prevMode);
//       setClickCount(0);
//     }
//   };
//   const appStyle = {
//     color: isDarkMode ? 'blue' : 'white',
//   };
//   return (
//     <Router>
//       <div className="App" onContextMenu={handleContextMenu} style={appStyle} >
//       <ToastContainer  theme="dark" />
//         <Navbar />

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Service />} />
//           <Route path="/feedback" element={<Feedback />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/sign-up" element={<SignUp />} />
//           <Route path="/shopregister" element={<Shopform />} />
//           <Route path="/demo" element={<ProductList />} />
//           {/* <Route path="/checkout" element={<CheckoutPage/>} />
//           <Route path="/payment" element={<Payment/>} /> */}
         



//         </Routes>


//         <Routes>
//           <Route path="/admin/*" element={<Admin />} />

//         </Routes>
      
//         <Elements stripe={stripePromise}>
//           <Routes>
//           <Route path="/checkout" element={<Checkout/>} />
//           <Route path='/success' element={<Success/>}/>
//           <Route path='/notfound' element={<NotFound/>}/>

//           </Routes>
//         </Elements>
//       </div>
//     </Router>
//   );
// }

// export default App;


//// ela irukkurathu thandaa muthalla use pannathuuuu 

import './App.css';
import "@google/model-viewer/dist/model-viewer.min.js";
import { useState } from 'react';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import About from './componants/About/About';
import Feedback from './componants/Feedback/Feedback';
// import Footer from './componants/Footer/Footer';
import Home from './componants/Home/Home';
import Navbar from './componants/Navbar/Navbar';
import Service from './componants/Service/Service';
import Login from './componants/SignIn/Signin';
import SignUp from './componants/SignUp/SignUp';
import Shopform from './componants/shop/Shopregester';
import ProductList from './componants/demos/democomponents/ProductList/ProductList';
import Admin from './componants/Admin/admindash';
// import CheckoutPage from './componants/payment/CheckoutPage';
import Success from './componants/payment/success';
import NotFound from './componants/payment/notfound';
import Checkout from './componants/payment/payment';
import Profile from './componants/others/Profile';
import Paymentak from './componants/paymentak/Paymentak';
// import Payment from './componants/payment/payment';






const stripePromise = loadStripe('pk_test_51OoJ6HLVCHRJpIbwFzteE8MyfGV4aFwrGJNY2dUZW0KY4QnspufC86vgbnw5kxQdIIuGPwn2dP7TZQORA39QfH8Q00tIHCIZNv');


function App() {

  // const location = useLocation();
  // const isAdminPage = location.pathname.startsWith('/admin');
  // const [isAdmin, setIsAdmin] = useState(); 
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  const [clickCount, setClickCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleContextMenu = (e) => {
    e.preventDefault();
    setClickCount((prevCount) => prevCount + 1);

    if (clickCount === 2) {
      setIsDarkMode((prevMode) => !prevMode);
      setClickCount(0);
    }
  };
  const appStyle = {
    color: isDarkMode ? 'blue' : 'white',
  };




  return (
    <Router>
      <div className="App" onContextMenu={handleContextMenu} style={appStyle} >
      <ToastContainer  theme="dark" />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/shopregister" element={<Shopform />} />
          <Route path="/demo" element={<ProductList />} />
          <Route path="/profile" element={<Profile />} />


          {/* <Route path="/checkout" element={<CheckoutPage/>} />
          <Route path="/payment" element={<Payment/>} /> */}
         <Route path="/paymentak" element={<Paymentak/>} />



        </Routes>


        <Routes>
          {/* <Route path="/admin/*" element={<Admin />} /> */}
          <Route
          path="/admin/*"
          element={isAdmin ? <Admin/> : <Navigate to="/" />}
        />
        </Routes>
      
        <Elements stripe={stripePromise}>
          <Routes>
          <Route path="/checkout" element={<Checkout/>} />
          <Route path='/success' element={<Success/>}/>
          <Route path='/notfound' element={<NotFound/>}/>

          </Routes>
        </Elements>
      </div>
    </Router>
  );
}

export default App;







// import React, { useState } from 'react';
// import './styles.css'; // Import the CSS file

// const App = () => {
//   const [clickCount, setClickCount] = useState(0);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const handleContextMenu = (e) => {
//     e.preventDefault();
//     setClickCount((prevCount) => prevCount + 1);

//     if (clickCount === 2) {
//       setIsDarkMode((prevMode) => !prevMode);
//       setClickCount(0);
//     }
//   };

//   const appClasses = isDarkMode ? 'dark-mode' : 'light-mode';

//   return (
//     <div onContextMenu={handleContextMenu} className={appClasses}>
//       <h1>Right-click three times to toggle light/dark mode</h1>
//     </div>
//   );
// };

// export default App;
