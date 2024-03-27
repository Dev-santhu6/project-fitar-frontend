

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import "./admin.css"


// const ShopList = () => {
//   const [shops, setShops] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchShops = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/admin/shopsprofile');
//         setShops(response.data);
//       } catch (error) {
//         console.error('Error fetching shops:', error);
//       }
//     };
//     fetchShops();
//   }, []);

//   const handleEdit = (shop) => {
//     console.log('Edit shop:', shop._id);
//   };

//   const handleDelete = async (shop) => {
//     try {
//       await axios.delete('http://localhost:5000/api/admin/deleteshop', { data: shop });
//       setShops(shops.filter((s) => s._id !== shop._id));
//       console.log('Shop deleted successfully');
//     } catch (error) {
//       console.error('Failed to delete shop:', error);
//     }
//   };

//   const [selectedShops, setSelectedShops] = useState([]);

//   const toggleShopSelection = (shopId) => {
//     if (selectedShops.includes(shopId)) {
//       setSelectedShops(selectedShops.filter((id) => id !== shopId));
//     } else {
//       setSelectedShops([...selectedShops, shopId]);
//     }
//   };

//   const filteredShops = shops.filter((shop) =>
//   shop.shopname.toLowerCase().includes(searchTerm.toLowerCase()) ||
//   shop.ownername.toLowerCase().includes(searchTerm.toLowerCase()) ||
//   shop.owneremail.toLowerCase().includes(searchTerm.toLowerCase()) ||
//   shop.shopaddress.toLowerCase().includes(searchTerm.toLowerCase()) 
//   // shop.shopnumber.toLowerCase().includes(searchTerm.toLowerCase())
// );


//   return (
//     <div className='shoplist' style={{marginTop:"50px"}}>
//       <h2>Shop List</h2>
//       <input
//         type='text'
//         placeholder='Find'
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         style={{marginLeft:"1400px",marginBottom:"15px"}}
//       />
//       <table className='table table-striped'>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>OwnerName</th>
//             <th>OwnerEmail</th>            
//             <th>OwnerAdress</th>
//             <th>Owner PhoneNumber</th>
//             <th>ShopName</th>
//             <th>ShopAdress</th>
//             <th>Shop PhoneNumber</th>
//             <th>Shop Web URL</th>            
//             <th>Actions</th>
//             <th>Verify</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredShops.map((shop) => (
//             <tr key={shop._id}>
//               <td>{shop._id}</td>
//               <td>{shop.ownername}</td>
//               <td>{shop.owneremail}</td>
//               <td>{shop.owneraddress}</td>
//               <td>{shop.ownerphonenumber}</td>
//               <td>{shop.shopname}</td>
//               <td>{shop.shopaddress}</td>
//               <td>{shop.shopphonenumber}</td>
//               <td> <a href="{shop.shopwebsiteURL}" target='_blank'>{shop.shopwebsiteURL}</a></td>
//               <td>
//                 <button
//                   className='btn btn-primary btn-sm mr-2'
//                   onClick={() => handleEdit(shop)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className='btn btn-danger btn-sm'
//                   onClick={() => handleDelete(shop)}
//                 >
//                   Delete
//                 </button>
//               </td>
//               <td>
//                 <button
//                   className={`btn btn-${selectedShops.includes(shop._id) ? 'success' : 'outline-secondary'} btn-sm`}
//                   onClick={() => toggleShopSelection(shop._id)}
//                 >
//                   {selectedShops.includes(shop._id) ? 'SELECTE' : 'JOINED'}
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ShopList;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import "./admin.css"

// const ShopList = () => {
//   const [shops, setShops] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchShops = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/admin/shopsprofile');
//         setShops(response.data);
//       } catch (error) {
//         console.error('Error fetching shops:', error);
//       }
//     };
//     fetchShops();
//   }, []);

//   const handleEdit = (shop) => {
//     console.log('Edit shop:', shop._id);
//   };

//   const handleDelete = async (shop) => {
//     try {
//       await axios.delete('http://localhost:5000/api/admin/deleteshop', { data: shop });
//       setShops(shops.filter((s) => s._id !== shop._id));
//       console.log('Shop deleted successfully');
//     } catch (error) {
//       console.error('Failed to delete shop:', error);
//     }
//   };

//   const sendEmail = async (owneremail) => {
//     try {
//       await axios.post('http://localhost:5000/api/admin/sendemail', { owneremail });
//       console.log('Email sent to shop owner');
//     } catch (error) {
//       console.error('Failed to send email:', error);
//     }
//   };



//   const [selectedShops, setSelectedShops] = useState([]);

//   const toggleShopSelection = (shopId) => {
//     if (selectedShops.includes(shopId)) {
//       setSelectedShops(selectedShops.filter((id) => id !== shopId));
//     } else {
//       setSelectedShops([...selectedShops, shopId]);
//     }
//   };

//   const filteredShops = shops.filter((shop) =>
//     shop.shopname.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     shop.ownername.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     shop.owneremail.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     shop.shopaddress.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <section style={{ width:"100%" ,height:"auto"}}>
//     <div className='shoplist' style={{ marginTop: "50px"}}>
//       <h2>Shop List</h2>
//       <input
//         type='text'
//         placeholder='Find'
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         style={{ marginLeft: "1200px", marginBottom: "15px" }}
//       />
//       <table className='table table-striped'>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>OwnerName</th>
//             <th>OwnerEmail</th>
//             <th>OwnerAdress</th>
//             <th>Owner PhoneNumber</th>
//             <th>ShopName</th>
//             <th>ShopAdress</th>
//             <th>Shop PhoneNumber</th>
//             <th>Shop Web URL</th>
//             <th>Actions</th>
//             <th>Verify</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredShops.map((shop) => (
//             <tr key={shop._id}>
//               <td>{shop._id}</td>
//               <td>{shop.ownername}</td>
//               <td>{shop.owneremail}</td>
//               <td>{shop.owneraddress}</td>
//               <td>{shop.ownerphonenumber}</td>
//               <td>{shop.shopname}</td>
//               <td>{shop.shopaddress}</td>
//               <td>{shop.shopphonenumber}</td>
//               <td> <a href="{shop.shopwebsiteURL}" target='_blank'>{shop.shopwebsiteURL}</a></td>
//               <td>
//                 <button
//                   className='btn btn-primary btn-sm mr-2'
//                   onClick={() => handleEdit(shop)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className='btn btn-danger btn-sm'
//                   onClick={() => handleDelete(shop)}
//                 >
//                   Delete<i className="bi bi-trash"></i>
//                 </button>
//               </td>
//               <td>
//                 <button
//                   className={`btn btn-${selectedShops.includes(shop._id) ? 'success' : 'outline-secondary'} btn-sm`}
//                   onClick={() => toggleShopSelection(shop._id)}
//                 >
//                   {selectedShops.includes(shop._id) ? 'joined' : 'select'}
//                 </button>
//               </td>
           
//               <td>
//                 <button
//                   className='btn btn-info btn-sm'
//                   onClick={() => sendEmail(shop.owneremail)}
//                 >
//                   Send Email
//                 </button>


//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     </section>
//   );
// };

// export default ShopList;
/// ithansthukku melatahn nee senchathuuuu

// ShopList.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import "./admin.css"

// const ShopList = () => {
//   const [shops, setShops] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [editFormData, setEditFormData] = useState({
//     ownername: '',
//     owneremail: '',
//     owneraddress: '',
//     ownerphonenumber: '',
//     shopname: '',
//     shopaddress: '',
//     shopphonenumber: '',
//     shopwebsiteURL: ''
//   });

//   useEffect(() => {
//     const fetchShops = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/admin/shopsprofile');
//         setShops(response.data);
//       } catch (error) {
//         console.error('Error fetching shops:', error);
//       }
//     };
//     fetchShops();
//   }, []);

//   const handleEdit = (shop) => {
//     setEditFormData({ ...shop });
//   };

//   const handleEditFormChange = (e) => {
//     setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
//   };

//   const handleEditSubmit = async (email) => {
//     try {
//       const response = await axios.put(`http://localhost:5000/api/admin/updateShop/${email}`, editFormData);
//       setShops(shops.map(shop => shop.email === email ? response.data.shop : shop));
//       console.log('Shop updated successfully');
//     } catch (error) {
//       console.error('Failed to update shop:', error);
//     }
//   };

//   const handleDelete = async (shop) => {
//     try {
//       await axios.delete('http://localhost:5000/api/admin/deleteshop', { data: shop });
//       setShops(shops.filter((s) => s._id !== shop._id));
//       console.log('Shop deleted successfully');
//     } catch (error) {
//       console.error('Failed to delete shop:', error);
//     }
//   };

//   const sendEmail = async (owneremail) => {
//     try {
//       await axios.post('http://localhost:5000/api/admin/sendemail', { owneremail });
//       console.log('Email sent to shop owner');
//     } catch (error) {
//       console.error('Failed to send email:', error);
//     }
//   };

//   const [selectedShops, setSelectedShops] = useState([]);

//   const toggleShopSelection = (shopId) => {
//     if (selectedShops.includes(shopId)) {
//       setSelectedShops(selectedShops.filter((id) => id !== shopId));
//     } else {
//       setSelectedShops([...selectedShops, shopId]);
//     }
//   };

//   const filteredShops = shops.filter((shop) =>
//     shop.shopname.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     shop.ownername.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     shop.owneremail.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     shop.shopaddress.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <section style={{ width:"100%" ,height:"auto"}}>
//     <div className='shoplist' style={{ marginTop: "50px"}}>
//       <h2>Shop List</h2>
//       <input
//         type='text'
//         placeholder='Find'
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         style={{ marginLeft: "1200px", marginBottom: "15px" }}
//       />
//       <table className='table table-striped'>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>OwnerName</th>
//             <th>OwnerEmail</th>
//             <th>OwnerAdress</th>
//             <th>Owner PhoneNumber</th>
//             <th>ShopName</th>
//             <th>ShopAdress</th>
//             <th>Shop PhoneNumber</th>
//             <th>Shop Web URL</th>
//             <th>Actions</th>
//             <th>Verify</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredShops.map((shop) => (
//             <tr key={shop._id}>
//               <td>{shop._id}</td>
//               <td>{shop.ownername}</td>
//               <td>{shop.owneremail}</td>
//               <td>{shop.owneraddress}</td>
//               <td>{shop.ownerphonenumber}</td>
//               <td>{shop.shopname}</td>
//               <td>{shop.shopaddress}</td>
//               <td>{shop.shopphonenumber}</td>
//               <td> <a href="{shop.shopwebsiteURL}" target='_blank'>{shop.shopwebsiteURL}</a></td>
//               <td>
//                 <button
//                   className='btn btn-primary btn-sm mr-2'
//                   onClick={() => handleEdit(shop)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className='btn btn-danger btn-sm'
//                   onClick={() => handleDelete(shop)}
//                 >
//                   Delete<i className="bi bi-trash"></i>
//                 </button>
//               </td>
//               <td>
//                 <button
//                   className={`btn btn-${selectedShops.includes(shop._id) ? 'success' : 'outline-secondary'} btn-sm`}
//                   onClick={() => toggleShopSelection(shop._id)}
//                 >
//                   {selectedShops.includes(shop._id) ? 'joined' : 'select'}
//                 </button>
//               </td>
           
//               <td>
//                 <button
//                   className='btn btn-info btn-sm'
//                   onClick={() => sendEmail(shop.owneremail)}
//                 >
//                   Send Email
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     </section>
//   );
// };

// export default ShopList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./admin.css"

const ShopList = () => {
  const [shops, setShops] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editFormData, setEditFormData] = useState({
    ownername: '',
    owneremail: '',
    owneraddress: '',
    ownerphonenumber: '',
    shopname: '',
    shopaddress: '',
    shopphonenumber: '',
    shopwebsiteURL: ''
  });

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/api/admin/shopsprofile`);
        setShops(response.data);
      } catch (error) {
        console.error('Error fetching shops:', error);
      }
    };
    fetchShops();
  }, []);

  const handleEdit = (shop) => {
    setEditFormData({ ...shop });
  };

  const handleEditFormChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (email) => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_URL}/api/admin/updateShop`, editFormData);
      setShops(shops.map(shop => shop.email === email ? response.data.shop : shop));
      console.log('Shop updated successfully');
    } catch (error) {
      console.error('Failed to update shop:', error);
    }
  };
    const handleDelete = async (shop) => {
    try {
      await axios.delete(`${process.env.REACT_APP_URL}/api/admin/deleteshop`, { data: shop });
      setShops(shops.filter((s) => s._id !== shop._id));
      console.log('Shop deleted successfully');
    } catch (error) {
      console.error('Failed to delete shop:', error);
    }
  };

  const sendEmail = async (owneremail) => {
    try {
      await axios.post(`${process.env.REACT_APP_URL}/api/admin/sendemail`, { owneremail });
      console.log('Email sent to shop owner');
    } catch (error) {
      console.error('Failed to send email:', error);
    }
  };

  const [selectedShops, setSelectedShops] = useState([]);

  const toggleShopSelection = (shopId) => {
    if (selectedShops.includes(shopId)) {
      setSelectedShops(selectedShops.filter((id) => id !== shopId));
    } else {
      setSelectedShops([...selectedShops, shopId]);
    }
  };

  const filteredShops = shops.filter((shop) =>
    shop.shopname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shop.ownername.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shop.owneremail.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shop.shopaddress.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section style={{ width:"100%" ,height:"auto"}}>
    <div className='shoplist' style={{ marginTop: "50px"}}>
      <h2>Shop List</h2>
      <input
        type='text'
        placeholder='Find'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginLeft: "1200px", marginBottom: "15px" }}
      />
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>OwnerName</th>
            <th>OwnerEmail</th>
            <th>OwnerAdress</th>
            <th>Owner PhoneNumber</th>
            <th>ShopName</th>
            <th>ShopAdress</th>
            <th>Shop PhoneNumber</th>
            <th>Shop Web URL</th>
            <th>Actions</th>
            <th>Verify</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredShops.map((shop) => (
            <tr key={shop._id}>
              <td>{shop._id}</td>
              <td>{shop.ownername}</td>
              <td>{shop.owneremail}</td>
              <td>{shop.owneraddress}</td>
              <td>{shop.ownerphonenumber}</td>
              <td>{shop.shopname}</td>
              <td>{shop.shopaddress}</td>
              <td>{shop.shopphonenumber}</td>
              <td> <a href="{shop.shopwebsiteURL}" target='_blank'>{shop.shopwebsiteURL}</a></td>
              <td>
                <button
                  className='btn btn-primary btn-sm mr-2'
                  onClick={() => handleEdit(shop)}
                >
                  Edit
                </button>
                <button
                  className='btn btn-danger btn-sm'
                  onClick={() => handleDelete(shop)}
                >
                  Delete<i className="bi bi-trash"></i>
                </button>
              </td>
              <td>
                <button
                  className={`btn btn-${selectedShops.includes(shop._id) ? 'success' : 'outline-secondary'} btn-sm`}
                  onClick={() => toggleShopSelection(shop._id)}
                >
                  {selectedShops.includes(shop._id) ? 'joined' : 'select'}
                </button>
              </td>
           
              <td>
                <button
                  className='btn btn-info btn-sm'
                  onClick={() => sendEmail(shop.owneremail)}
                >
                  Send Email
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {editFormData && (
      <div className='edit-form' style={{marginTop:"50px",color:"black"}}>
        <h3>Edit Shop</h3>
        <form onSubmit={() => handleEditSubmit(editFormData.email)}>
          <label htmlFor='ownername'>Owner Name:</label>
          <input type='text' name='ownername' value={editFormData.ownername} onChange={handleEditFormChange} />

          <label htmlFor='owneremail'>Owner Email:</label>
          <input type='text' name='owneremail' value={editFormData.owneremail} onChange={handleEditFormChange} />

          <label htmlFor='owneraddress'>Owner Address:</label>
          <input type='text' name='owneraddress' value={editFormData.owneraddress} onChange={handleEditFormChange} />

          <label htmlFor='ownerphonenumber'>Owner Phone Number:</label>
          <input type='text' name='ownerphonenumber' value={editFormData.ownerphonenumber} onChange={handleEditFormChange} />

          <label htmlFor='shopname'>Shop Name:</label>
          <input type='text' name='shopname' value={editFormData.shopname} onChange={handleEditFormChange} />

          <label htmlFor='shopaddress'>Shop Address:</label>
          <input type='text' name='shopaddress' value={editFormData.shopaddress} onChange={handleEditFormChange} />

          <label htmlFor='shopphonenumber'>Shop Phone Number:</label>
          <input type='text' name='shopphonenumber' value={editFormData.shopphonenumber} onChange={handleEditFormChange} />

          <label htmlFor='shopwebsiteURL'>Shop Web URL:</label>
          <input type='text' name='shopwebsiteURL' value={editFormData.shopwebsiteURL} onChange={handleEditFormChange} />

          <button type='submit'>Save Changes</button>
        </form>
      </div>
    )}
    </section>
  );
};

export default ShopList;

