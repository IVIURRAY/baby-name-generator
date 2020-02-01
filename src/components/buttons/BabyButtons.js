import React from 'react';
import { NewNameButton } from './NewNameButton';
import { EditSurnameButton } from './EditSurnameButton';
import { GenderButton } from './GenderButton';

import './BabyButton.css';

const BabyButtons = ({currentName, filters, addHistoricBabyName, setCurrentForename, setCurrentSurname, setGenderFilter}) => {

    return (
        <div className="buttonContainer">
            <NewNameButton 
                currentName={currentName} 
                addHistoricBabyName={addHistoricBabyName}
                setCurrentForename={setCurrentForename}
                filters={filters}
            />
            <GenderButton 
                setGenderFilter={setGenderFilter}
            />
            <EditSurnameButton 
                currentName={currentName}
                setCurrentSurname={setCurrentSurname}
            />
        </div>
    )
}

export {
    BabyButtons
};