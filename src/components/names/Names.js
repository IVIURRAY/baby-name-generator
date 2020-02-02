import React from 'react';
import { FirstName, LastName } from '../names';

import './Names.css'

const Names = ({ forename, surname }) => {

    return (
        <div className="namesContainer">
            <FirstName name={forename} />
            <LastName name={surname} />
        </div>
    )
}

export { Names };