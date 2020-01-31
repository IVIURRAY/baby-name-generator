import React from 'react';
import './FirstName.css';

const FirstName = ({name}) => {
  return (
        <div className="firstName">
          {name}
        </div>
    )
}

export {FirstName};