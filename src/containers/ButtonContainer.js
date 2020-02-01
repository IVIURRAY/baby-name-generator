import { connect } from 'react-redux';
import {addHistoricName, setCurrentForename, setCurrentSurname, setFilterGender, setFilterFirstNameChar} from '../actions'
import BabyButtons from '../components/buttons/BabyButtons';

const mapStateToProps = state => ({
    currentName: state.currentName,
    filters: state.filters
});


const mapDispatchToProps = dispatch => ({
    addHistoricBabyName: payload => dispatch(addHistoricName(payload)),
    setCurrentForename: name => dispatch(setCurrentForename(name)),
    setCurrentSurname: name => dispatch(setCurrentSurname(name)),
    setGenderFilter: gender => dispatch(setFilterGender(gender)),
    setFirstNameCharFilter: char => dispatch(setFilterFirstNameChar(char))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BabyButtons)