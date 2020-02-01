
const addHistoricName = payload => {
    return {type: 'ADD_HISTORIC_NAME', payload}
}

const setCurrentName = payload => {
    return {type: 'SET_CURRENT_NAME', payload}
}

const addToFavourites = payload => {
    return {type: 'ADD_TO_FAVOURITES', payload }
}

const removeFromFavourites = payload => {
    return {type: 'REMOVE_FROM_FAVOURITES', payload}
}

export {
    addHistoricName,
    setCurrentName,
    addToFavourites,
    removeFromFavourites
};