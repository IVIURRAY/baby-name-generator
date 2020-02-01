import React from 'react';
import {Button} from 'antd';
import BabyNameGenerator from '../../services/BabyNameGenerator';


const NewNameButton = ({currentName, filters, addHistoricBabyName, setCurrentForename}) => {

    const onBabyNameChange = () => {       
        const newName = BabyNameGenerator(filters.isBoy, filters.firstNameChar)
        addHistoricBabyName({forename: newName, surname: currentName.surname});
        setCurrentForename(newName);
    }
  
    return (
        <div className="newNameBtn">
            <Button icon="smile" onClick={onBabyNameChange} size="large">
                New Name
            </Button>
        </div>
    )
}

export {
    NewNameButton
};