

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEdit } from '@fortawesome/free-solid-svg-icons';
import './other.css';

const Profile = () => {
    const userdetail = JSON.parse(localStorage.getItem('userinfo'));
    const [user, setUser] = useState(null);
    const [shop, setShop] = useState(null);
    const [error, setError] = useState('');
    const [showDetails, setShowDetails] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [updatedShop, setUpdatedShop] = useState({
        ownername: '',
        owneraddress: '',
        ownerphonenumber: '',
        owneremail: '',
        shopname: '',
        shopaddress: '',
        shopregistrationnumber: '',
        shopphonenumber: '',
        shopwebsiteURL: ''
    });

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_URL}/api/user/getprofile/${userdetail}`);
                setUser(response.data);
                setError(null);
            } catch (error) {
                setUser(null);
                setError(error.response.data.message);
            }
        };

        const fetchShop = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_URL}/api/user/getshop/${userdetail}`);
                setShop(response.data);
                setUpdatedShop(response.data); // Pre-fill updatedShop state with current shop details
                setError(null);
            } catch (error) {
                setShop(null);
                setError(error.response.data.message);
            }
        };

        if (userdetail) {
            fetchUser();
            fetchShop();
        }
    }, [userdetail]);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedShop({ ...updatedShop, [name]: value });
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`${process.env.REACT_APP_URL}/api/user/shop/${userdetail}`, updatedShop);
            setShop(updatedShop);
            toggleEditMode();
        } catch (error) {
            console.error('Error updating shop details:', error.response.data.message);
        }
    };

    return (
        <section className='userprofile'>
            <div className='details-container'>
                <div className='user-details'>
                    <button className='user-icon' onClick={toggleDetails}>
                        <FontAwesomeIcon icon={faUser} size='3x' />
                    </button>
                    {user && (
                        <div className='userpara'>
                           {/* <button className='userbutton' style={{borderRadius:"10px",marginTop:"10px",boxShadow:"none",border:"none",textAlign:"center",height:"40px"}}><p style={{textAlign:"center",paddingTop:"5px"}}>Name: {user.name}</p></button> <br/>
                           <button className='userbutton' style={{borderRadius:"10px",marginTop:"10px",boxShadow:"none",border:"none",textAlign:"center",height:"40px"}}><p style={{textAlign:"center",paddingTop:"5px"}}>Email: {user.email}</p></button>    */}
                           <p>Name: {user.name}</p>
                              <p>Email: {user.email}</p>

                        </div>
                    )}
                </div>
                {shop && (
                    <div className='shop-details'>
                        <h2>Shop Details</h2>
                        {editMode ? (
                            <div className='edit-form'>
                                <input type='text' name='ownername' placeholder='Owner Name' value={updatedShop.ownername} onChange={handleInputChange} />
                                <input type='text' name='owneraddress' placeholder='Owner Address' value={updatedShop.owneraddress} onChange={handleInputChange} />
                                <input type='text' name='ownerphonenumber' placeholder='Owner Phone Number' value={updatedShop.ownerphonenumber} onChange={handleInputChange} />
                                <input type='text' name='owneremail' placeholder='Owner Email' value={updatedShop.owneremail} onChange={handleInputChange} />
                                <input type='text' name='shopname' placeholder='Shop Name' value={updatedShop.shopname} onChange={handleInputChange} />
                                <input type='text' name='shopaddress' placeholder='Shop Address' value={updatedShop.shopaddress} onChange={handleInputChange} />
                                <input type='text' name='shopregistrationnumber' placeholder='Shop Registration Number' value={updatedShop.shopregistrationnumber} onChange={handleInputChange} />
                                <input type='text' name='shopphonenumber' placeholder='Shop Phone Number' value={updatedShop.shopphonenumber} onChange={handleInputChange} />
                                <input type='text' name='shopwebsiteURL' placeholder='Shop Website URL' value={updatedShop.shopwebsiteURL} onChange={handleInputChange} />
                                <button className='save-btn' onClick={handleUpdate}>Save Changes</button>
                                <button className='cancel-btn' onClick={toggleEditMode}>Cancel</button>
                            </div>
                        ) : (
                            <div className="shop-details-left">
        <table>
            <tbody>
                <tr>
                    <td><b>Owner Name:</b></td>
                    <td className='tdinfo'>{shop.ownername}</td>
                </tr>
                <tr>
                    <td><b>Owner Address:</b></td>
                    <td className='tdinfo'>{shop.owneraddress}</td>
                </tr>
                <tr>
                    <td><b>Owner Phone Number:</b></td>
                    <td className='tdinfo'>{shop.ownerphonenumber}</td>
                </tr>
                <tr>
                    <td><b>Owner Email:</b></td>
                    <td className='tdinfo'>{shop.owneremail}</td>
                </tr>
                <tr>
                    <td><b>Shop Name:</b></td>
                    <td className='tdinfo'>{shop.shopname}</td>
                </tr>
                <tr>
                    <td><b>Shop Address:</b></td>
                    <td className='tdinfo'>{shop.shopaddress}</td>
                </tr>
                <tr>
                    <td><b>Shop Registration Number:</b></td>
                    <td className='tdinfo'>{shop.shopregistrationnumber}</td>
                </tr>
                <tr>
                    <td><b>Shop Phone Number:</b></td>
                    <td className='tdinfo'>{shop.shopphonenumber}</td>
                </tr>
                <tr>
                    <td><b>Shop Website URL:</b></td>
                    <td className='tdinfo'>{shop.shopwebsiteURL}</td>
                </tr>
            </tbody>
        </table>
    </div>
                        )}
                        {!editMode && <button className='edit-btn' onClick={toggleEditMode}>Edit</button>}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Profile;
