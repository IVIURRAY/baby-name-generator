import { combineReducers} from 'redux';

const historicNamesReducer = (state = [], action) => {
    if (action.type === 'ADD_HISTORIC_NAME') {
        return [action.payload].concat(state).slice(0, 20);
    }

    return state;
}

const initState = {
    forename: '?????',
    surname: 'Murray'
}
const currentNameReducer = (state = initState, action) => {
    if (action.type === 'SET_CURRENT_FORENAME') {
        state.forename = action.payload;
        return state;
    } else if (action.type === 'SET_CURRENT_SURNAME') {
        state.surname = action.payload
        return state;
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

export default combineReducers({
    historicNames: historicNamesReducer,
    currentName: currentNameReducer,
    favouriteNames: favouriteNamesReducers,
});