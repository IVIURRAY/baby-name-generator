import React from 'react';
import NewNameButton from './NewNameButton';
import EditSurnameButton from './EditSurnameButton';
import GenderButton from './GenderButton';
import AlphabetButtons from './AlphabetButtons';

import './BabyButton.css';
import { Icon, Button } from 'antd';

const BabyButtons = ({currentName, favouriteNames, filters, addHistoricBabyName, addToFavourites, setCurrentForename, setCurrentSurname, setGenderFilter, setFirstNameCharFilter}) => {

    return (
        <div className="inputContainer">
            <div className="favContainer">
                <Button 
                    shape="round" 
                    disabled={favouriteNames.filter(({forename, surname}) => forename === currentName.forename && surname === currentName.surname).length > 0}
                    onClick={() => addToFavourites({forename: currentName.forename, surname: currentName.surname})}
                    style={{borderColor: 'red', color: 'red'}}
                >
                    Add to Favourites <Icon type='heart' theme="filled" style={{color: 'red'}}/>
                </Button> 
            </div>
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
            <AlphabetButtons setFirstNameCharFilter={setFirstNameCharFilter}/>
        </div>
        
    )
}

export default BabyButtons;