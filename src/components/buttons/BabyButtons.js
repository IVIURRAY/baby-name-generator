import React from 'react';
import { NewNameButton } from './NewNameButton';
import { EditSurnameButton } from './EditSurnameButton';

import './BabyButton.css';

const BabyButtons = ({currentName, addHistoricBabyName, setCurrentForename, setCurrentSurname}) => {

    return (
        <div className="buttonContainer">
            <NewNameButton 
                currentName={currentName} 
                addHistoricBabyName={addHistoricBabyName}
                setCurrentForename={setCurrentForename}
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