import React from 'react';
import {Button} from 'antd';
import NAMES from '../../constants/names'


const NewNameButton = ({addHistoricBabyName, setCurrentBabyName}) => {

    const onBabyNameChange = () => {       
        var newName = NAMES[Math.floor(Math.random() * NAMES.length)];
        addHistoricBabyName(newName);
        setCurrentBabyName(newName);
    }
  
    return (
        <div className="buttonContainer">
            <Button icon="smile" onClick={onBabyNameChange}>
                New Name
            </Button>
        </div>
    )
}

export {
    NewNameButton
};