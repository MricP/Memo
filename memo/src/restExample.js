import React, { useState, useEffect} from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:27017/getUsers')
      .then(response => setUsers(response.data))
      .catch(err => console.log(err))
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.map(users => (
        <h3 key={users._id}>{users.username}</h3>
      ))}
    </div>
  );
}

export default App;