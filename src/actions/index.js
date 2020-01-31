
const addHistoricName = payload => {
    return {type: 'ADD_HISTORIC_NAME', payload}
}

const setCurrentName = payload => {
    return {type: 'SET_CURRENT_NAME', payload}
}

export {
    addHistoricName,
    setCurrentName
};