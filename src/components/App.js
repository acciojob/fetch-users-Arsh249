import React, { useState } from "react";
import '@babel/polyfill';
import './../styles/App.css';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchUsers = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('https://reqres.in/api/users');
      setUsers(response.data.data); // Assuming the API response has the data under `data.data`
    } catch (err) {
      setError('Failed to fetch users. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>User List</h1>
      <button className="btn" onClick={fetchUsers}>Get User List</button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {users.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Avatar</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td><img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} width="50" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !loading && <p>No data found</p>
      )}
    </div>
  );
}

export default App
