
const addHistoricName = payload => {
    return {type: 'ADD_HISTORIC_NAME', payload}
}

const setCurrentForename = payload => {
    return {type: 'SET_CURRENT_FORENAME', payload}
}

const setCurrentSurname = payload => {
    return {type: 'SET_CURRENT_SURNAME', payload}
}

const addToFavourites = payload => {
    return {type: 'ADD_TO_FAVOURITES', payload }
}

const removeFromFavourites = payload => {
    return {type: 'REMOVE_FROM_FAVOURITES', payload}
}

export {
    addHistoricName,
    setCurrentForename,
    setCurrentSurname,
    addToFavourites,
    removeFromFavourites
};