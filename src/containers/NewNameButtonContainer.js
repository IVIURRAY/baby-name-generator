import { connect } from 'react-redux';
import { NewNameButton } from '../components/buttons/NewNameButton';
import {addHistoricName, setCurrentForename, setCurrentSurname} from '../actions'

const mapDispatchToProps = dispatch => ({
    addHistoricBabyName: name => dispatch(addHistoricName(name)),
    setCurrentForename: name => dispatch(setCurrentForename(name)),
    setCurrentSurname: name => dispatch(setCurrentSurname(name))
})

export default connect(
    null,
    mapDispatchToProps
)(NewNameButton)