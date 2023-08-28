import React, { useEffect, useState } from 'react';
import EditMember from './EditMember';
import { Navigate } from 'react-router-dom';

function Edit() {
  const url = new URL(window.location.href);
  const userId = url.pathname.split('/').pop(); // Get the last part of the pathname as userId
  const [user, setUser] = useState(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem('registrationData');
    const parsedData = storedData ? JSON.parse(storedData) : [];
    const foundUser = parsedData.find((userData) => userData.id === userId);
    if (foundUser) {
      setUser(foundUser);
    } else {
      setDone(true);
    }
  }, [userId]);

  const handleSave = (updatedUser) => {
    const storedData = localStorage.getItem('registrationData');
    const parsedData = storedData ? JSON.parse(storedData) : [];
    const updatedData = parsedData.map((userData) =>
      userData.id === userId ? updatedUser : userData
    );
    localStorage.setItem('registrationData', JSON.stringify(updatedData));
    setDone(true);
  };

  return (
    <div>
      {user ? <EditMember user={user} onSave={handleSave} /> : <p>Loading...</p>}
      {done && <Navigate to="/" />}
    </div>
  );
}

export default Edit;
