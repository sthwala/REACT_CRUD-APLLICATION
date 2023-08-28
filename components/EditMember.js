import React, { useState } from 'react';

const EditMember = ({ user, onSave }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [jobTitle, setJobTitle] = useState(user.jobTitle);

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleJobTitle = (e) => {
    setJobTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...user,
      firstName,
      jobTitle,
      
    };
    onSave(updatedUser);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Edit Member</h2>
        <div>
          {/* Display user's image here */}
          <img src={user.image} alt="User" />
        </div>
        <div>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstName}
            placeholder="Full Names"
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="jobTitle"
            value={jobTitle}
            onChange={handleJobTitle}
            placeholder="Job Title"
            required
          />
        </div>
        <div>
          <button type="submit">Edit Member</button>
        </div>
      </form>
    </div>
  );
};

export default EditMember;
