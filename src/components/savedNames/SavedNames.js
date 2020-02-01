import React from 'react';
import { HistoricNames } from './HistoricNames';
import FavouriteNames from './FavouriteNames';

import './savedNames.css';

const SavedNames = ({historicNames, favouriteNames, currentName, onAddToFavourite, onRemoveFromFavouite}) => {

    return (
        <div className="savedNamesContainer">
            <HistoricNames 
                names={historicNames}
                currentName={currentName}
                favouriteNames={favouriteNames}
                onAddToFavourite={onAddToFavourite}
            />
            <FavouriteNames 
                names={favouriteNames} 
                onRemoveFromFavouite={onRemoveFromFavouite}
            />
        </div>
    )
}

export default SavedNames;
