import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Admin/admin.css"

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/api/admin/usersprofile`);
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = (id) => {
    console.log('Delete user:', id);
  };

  return (
    <div style={{marginTop:"80px"}}>
    <div className='userlist'style={{ backgroundColor: 'linear-gradient(45deg, rgb(9, 2, 32) 0%, rgba(17, 0, 29, 0.944) 100%)', color: 'white', minHeight: '100vh' }}>
      <table className="table table-striped" >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>            
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default UserList;
