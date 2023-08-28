import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

function Home() {
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [membersExist, setMembersExist] = useState(false);

  const handleDelete = (id) => {
    // Remove the user with the given id from local storage
    const updatedUsers = registeredUsers.filter(user => user.id !== id);
    localStorage.setItem('registrationData', JSON.stringify(updatedUsers));
    setRegisteredUsers(updatedUsers);
  }

  useEffect(() => {
    const storedData = localStorage.getItem('registrationData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setRegisteredUsers(parsedData);
      setMembersExist(true);
    } else {
      setMembersExist(false);
    }
  }, []);

  return (
    <div>
      <div>
        <Link to="/Create">
          <button>Add member</button>
        </Link>
      </div>
      <br />

      {registeredUsers.map(user => (
        <div key={user.id}>
          {user.image && <img src={user.image} alt="userprofileImage" />}
          <img src={user.image} alt="" />
          <div>
            <p>
              <span>{user.firstName} </span>
              <br />
              <span>{user.jobTitle}</span>
            </p>
          </div>
          <div>
            <Link to={`/edit/${user.id}`}><AiOutlineEdit size={30} /></Link>
            <button onClick={() => handleDelete(user.id)}><AiOutlineDelete size={30} /></button>
          </div>
        </div>
      ))}

      {!membersExist && (<h5>Add Member</h5>)}
    </div>
  )
}

export default Home;
