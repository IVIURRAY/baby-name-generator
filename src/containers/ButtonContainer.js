import { connect } from 'react-redux';
import {addHistoricName, setCurrentForename, setCurrentSurname} from '../actions'
import { BabyButtons } from '../components/buttons';

const mapStateToProps = state => ({
    currentName: state.currentName
});


const mapDispatchToProps = dispatch => ({
    addHistoricBabyName: payload => dispatch(addHistoricName(payload)),
    setCurrentForename: name => dispatch(setCurrentForename(name)),
    setCurrentSurname: name => dispatch(setCurrentSurname(name))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BabyButtons)