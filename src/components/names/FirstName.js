import React from 'react';
import './FirstName.css';

const FirstName = ({ name }) => {
  return (
    <div className="firstName">
      <label className="firstNameText">{name}</label>
    </div>
  )
}

export { FirstName };