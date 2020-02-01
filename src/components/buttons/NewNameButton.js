import React from 'react';
import {Button} from 'antd';
import NAMES from '../../constants/names'


const NewNameButton = ({currentName, addHistoricBabyName, setCurrentForename, setCurrentSurname}) => {

    const onBabyNameChange = () => {       
        var newName = NAMES[Math.floor(Math.random() * NAMES.length)];
        addHistoricBabyName({forename: newName, surname: currentName.surname});
        setCurrentForename(newName);
        setCurrentSurname(currentName.surname)
    }
  
    return (
        <div className="buttonContainer">
            <Button icon="smile" onClick={onBabyNameChange} size="large">
                New Name
            </Button>
        </div>
    )
}

export {
    NewNameButton
};