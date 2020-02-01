
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

const setFilterGender = payload => {
    return {type: 'SET_GENDER_FILTER', payload}
}

const setFilterFirstNameChar = payload => {
    return {type: 'SET_FIRST_NAME_CHAR', payload}
}

export {
    addHistoricName,
    setCurrentForename,
    setCurrentSurname,
    addToFavourites,
    removeFromFavourites,
    setFilterGender,
    setFilterFirstNameChar

};