import React, { useState } from 'react';
import axios from 'axios';
import '../shop/shopregister.css';

const Shopform = ({ onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [shopDetails, setShopDetails] = useState({
    ownername: '',
    owneraddress: '',
    ownerphonenumber: '',
    owneremail: '',
    shopname: '',
    shopaddress: '',
    shopregistrationnumber:'',
    shopphonenumber: '',
    shopwebsiteURL: '',
  });
  // const [ setError] = useState('');

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setShopDetails({ ...shopDetails, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      // Send a POST request to the backend API endpoint
      const response = await axios.post('http://localhost:5000/api/user/shopregister', shopDetails);
      console.log(response.data); // Handle success response
      onClose();
    } catch (error) {
      console.error('Error:', error.response.data); // Handle error response
      // setError(error.response.data.message);
    }
  };

  return (
    <div className='shopform' style={{zIndex:"999"}}>
    <div className="shop-form-modal">
      <div className="shop-form-content">
        <span className="close1" onClick={onClose}>&times;</span>
        <div className="form-container">
          < div className={`form-page ${currentPage === 1 ? '' : 'hidden1'}`} id="page1">
            <form id="form1">
              <p>Owner Details</p>
              <input type="text" name="ownername" placeholder="Owner Name" required onChange={handleOnChange} value={shopDetails.ownername} /><br />
              <input type="email" name="owneremail" placeholder="Owner Email" required onChange={handleOnChange} value={shopDetails.owneremail} /><br />
              <input type="tel" name="ownerphonenumber" placeholder="Owner Number" required onChange={handleOnChange} value={shopDetails.ownerphonenumber} /><br />
              <input type="text" name="owneraddress" placeholder="Owner Address" required onChange={handleOnChange} value={shopDetails.owneraddress} /><br />
              <button type="button" onClick={nextPage}>Next</button>
            </form>
          </div>
          <div className={`form-page ${currentPage === 2 ? '' : 'hidden1'}`} id="page2">
            <form id="form2">
              <p>Shop Details</p>
              <input type="text" name="shopname" placeholder="Shop Name" required onChange={handleOnChange} value={shopDetails.shopname} /><br />
              <input type="text" name="shopaddress" placeholder="Shop Address" required onChange={handleOnChange} value={shopDetails.shopaddress} /><br />
              <input type="text" name="shopregistrationnumber" placeholder="Shop Registration Number" required onChange={handleOnChange} value={shopDetails.shopregistrationnumber} /><br />
              <input type="tel" name="shopphonenumber" placeholder="Shop Number (not required)" onChange={handleOnChange} value={shopDetails.shopphonenumber} /><br />
              <input type="text" name="shopwebsiteURL" placeholder="Web URL for Shop" onChange={handleOnChange} value={shopDetails.shopwebsiteURL} /><br />
              <button type="button" onClick={prevPage}>Back</button>
              <button type="button" onClick={handleSubmit}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Shopform;
