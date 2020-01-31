import { combineReducers} from 'redux';

const historicNamesReducer = (state = [], action) => {
    if (action.type === 'ADD_HISTORIC_NAME') {
        return [action.payload].concat(state).slice(0, 20);
    }

    return state;
}

const currentNameReducer = (state = '?????', action) => {
    if (action.type === 'SET_CURRENT_NAME') {
        return action.payload;
    }

    return state;
}

const favouriteNamesReducers = (state = [], action) => {
    if (action.type === 'ADD_TO_FAVOURITES') {
        return [action.payload].concat(state);
    }

    return state;
}

export default combineReducers({
    historicNames: historicNamesReducer,
    currentName: currentNameReducer,
    favouriteNames: favouriteNamesReducers,
});