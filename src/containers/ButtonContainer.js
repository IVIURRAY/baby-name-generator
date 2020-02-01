import { connect } from 'react-redux';
import {addHistoricName, setCurrentForename, setCurrentSurname, setFilterGender, setFilterFirstNameChar, addToFavourites} from '../actions'
import BabyButtons from '../components/buttons/BabyButtons';

const mapStateToProps = state => ({
    favouriteNames: state.favouriteNames,
    currentName: state.currentName,
    filters: state.filters
});


const mapDispatchToProps = dispatch => ({
    addHistoricBabyName: payload => dispatch(addHistoricName(payload)),
    setCurrentForename: name => dispatch(setCurrentForename(name)),
    setCurrentSurname: name => dispatch(setCurrentSurname(name)),
    setGenderFilter: gender => dispatch(setFilterGender(gender)),
    setFirstNameCharFilter: char => dispatch(setFilterFirstNameChar(char)),
    addToFavourites: payload => dispatch(addToFavourites(payload)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BabyButtons)