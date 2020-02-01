import React from 'react';
import './LastName.css';

const LastName = ({name}) => {
    return (
        <div className="lastName">
          <label className="lastNameText">{name}</label>
        </div>
    )
}

export {LastName};