import React, { useState } from 'react';
import "./Form.css";

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [userList, setUserList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);


  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !mobile) return;
    if (name.length < 3) {
      alert('Name should be at least 3 characters long');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    if (!/^\d{10}$/.test(mobile)) {
      alert('Mobile number should be 10 digits long');
      return;
    }
    if (isEditing) {
      let updatedList = [...userList];
      updatedList[editIndex] = { name, email, mobile };
      setUserList(updatedList);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setUserList([...userList, { name, email, mobile }]);
    }
    setName('');
    setEmail('');
    setMobile('');
  };

  // Function to handle edit button click
  const handleEdit = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setName(userList[index].name);
    setEmail(userList[index].email);
    setMobile(userList[index].mobile);
  };

  // Function to handle delete button click
  const handleDelete = (index) => {
    let updatedList = [...userList];
    updatedList.splice(index, 1);
    setUserList(updatedList);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <br />
        <input
          type="tel"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          maxLength="10"
          placeholder="Mobile"
        />
        <br />
        <button>{isEditing ? 'Update' : 'Submit'}</button>
      </form>
      <br />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
