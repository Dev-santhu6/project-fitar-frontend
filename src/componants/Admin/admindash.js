import "../Admin/admin.css"
import {  Route, Routes } from 'react-router-dom';

import Header from './Header';


import UserList from "./Userlist";
import ShopList from './Shoplist';
import ImageUpload from "./releases";
import Review from "./Review";


function Admin() {
  return (
<div className="Admin">
      <Header />

      <Routes> 
      <Route path="/userlist" element={<UserList/>} />
      <Route path="/shoplist" element={<ShopList/>} />
      <Route path="/releses" element={<ImageUpload/>} />
      <Route path="/review" element={<Review/>} />



 </Routes>
    </div>
 
  );
}

export default Admin;
