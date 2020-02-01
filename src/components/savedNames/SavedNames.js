import React from 'react';
import { HistoricNames } from './HistoricNames';
import FavouriteNames from './FavouriteNames';

import './savedNames.css';

const SavedNames = ({historicNames, favouriteNames, onAddToFavourite, onRemoveFromFavouite}) => {

    return (
        <div className="savedNamesContainer">
            <HistoricNames 
                names={historicNames}
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
