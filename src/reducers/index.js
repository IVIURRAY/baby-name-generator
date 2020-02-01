import { combineReducers} from 'redux';

const historicNamesReducer = (state = [], action) => {
    if (action.type === 'ADD_HISTORIC_NAME') {
        return [action.payload].concat(state).slice(0, 10);
    }

    return state;
}

const initState = {
    forename: 'Sam',
    surname: 'Smith'
}
const currentNameReducer = (state = initState, action) => {
    if (action.type === 'SET_CURRENT_FORENAME') {
        return Object.assign({}, state, {forename: action.payload})
    } else if (action.type === 'SET_CURRENT_SURNAME') {
        return Object.assign({}, state, {surname: action.payload});
    }

    return state;
}

const favouriteNamesReducers = (state = [], action) => {
    if (action.type === 'ADD_TO_FAVOURITES') {
        return state.concat(action.payload)
    } else if (action.type === 'REMOVE_FROM_FAVOURITES') {
        return state.filter(({forename, surname}) => !(forename === action.payload.forename && surname === action.payload.surname))
    }

    return state;
}

const filterReducers = (state = {isBoy: true, firstNameChar: null}, action) => {
    if (action.type === 'SET_GENDER_FILTER') {
        return Object.assign({}, state, {isBoy: action.payload === 'BOY'})
    } else if (action.type === 'SET_FIRST_NAME_CHAR') {
        return Object.assign({}, state, {firstNameChar: action.payload})
    }

    return state;
}

export default combineReducers({
    historicNames: historicNamesReducer,
    currentName: currentNameReducer,
    favouriteNames: favouriteNamesReducers,
    filters: filterReducers,
});