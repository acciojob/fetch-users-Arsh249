
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const[data, setData] = useState(null);

  const fetchUser = async () => {
    try {
      const response = fetch("https://reqres.in/api/users");
      const data = await response.json();
      setData(data.data);
    } catch (error) {
      
    }
  }

  return (
    <div>
        <div className="header">
          <h1>Blue whales</h1>
          <button className="btn" onClick={fetchUser}>Get User List</button>
        </div>
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
            {data ? 
            (data.map((user)=>{
              return(
                <tr key={user.id}>
                     <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                   <td>
                    <img src={user.avatar} />
                   </td>
                </tr>
              )
            })) : (
              <tr>
                <td>Data not found</td>
              </tr>
            )

            }
          </tbody>
        </table>
    </div>
  )
}

export default App
