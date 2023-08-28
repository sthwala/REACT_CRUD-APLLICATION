import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Create() {
  const [firstName, setFirstName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [image, setImage] = useState(null);
  const [done, setDone] = useState(false);
  const navigator = useNavigate();
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleJobTitle = (e) => {
    setJobTitle(e.target.value);
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = new Date().getTime().toString();

    const storedData = localStorage.getItem('registrationData');
    let existingData = storedData ? JSON.parse(storedData) : [];

    const registrationData = {
      id: userId,
      firstName,
      jobTitle,
      image: image ? URL.createObjectURL(image) : null, // Store image URL

    };

    const newData = [...existingData, registrationData];

    localStorage.setItem('registrationData', JSON.stringify(newData));

    setFirstName('');
    setJobTitle('');
    setImage(null);
    setDone(true);
    navigator('/');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="Image">Image</label>
            <input type="file" id="Image" accept="image/*" onChange={handleImage} />
          </div>
          <div>
            {image && <img src={URL.createObjectURL(image)} alt="image" />}
          </div>
        </div>
        <div>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstName}
            placeholder='Full Names'
          />
        </div>
        <div>
          <input
            type="text"
            id="lastName"
            value={jobTitle}
            onChange={handleJobTitle}
            placeholder='Job Title'
          />
        </div>
        <div>
          <button className='btn' type="submit">Add Member</button>
        </div>
      </form>
      {/* {done && <Navigate to="/" />} */}
    </div>
  )
}

export default Create;
