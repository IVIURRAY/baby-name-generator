import React from 'react';
import { NewNameButton } from './NewNameButton';
import { EditSurnameButton } from './EditSurnameButton';
import { GenderButton } from './GenderButton';

import './BabyButton.css';

const BabyButtons = ({currentName, addHistoricBabyName, setCurrentForename, setCurrentSurname, setGenderFilter}) => {

    return (
        <div className="buttonContainer">
            <NewNameButton 
                currentName={currentName} 
                addHistoricBabyName={addHistoricBabyName}
                setCurrentForename={setCurrentForename}
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