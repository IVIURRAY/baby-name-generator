import { connect } from 'react-redux';
import {addHistoricName, setCurrentForename, setCurrentSurname, setFilterGender} from '../actions'
import { BabyButtons } from '../components/buttons';

const mapStateToProps = state => ({
    currentName: state.currentName
});


const mapDispatchToProps = dispatch => ({
    addHistoricBabyName: payload => dispatch(addHistoricName(payload)),
    setCurrentForename: name => dispatch(setCurrentForename(name)),
    setCurrentSurname: name => dispatch(setCurrentSurname(name)),
    setGenderFilter: gender => dispatch(setFilterGender(gender))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BabyButtons)