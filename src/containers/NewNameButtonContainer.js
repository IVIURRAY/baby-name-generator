import { connect } from 'react-redux';
import { NewNameButton } from '../components/buttons/NewNameButton';
import {addHistoricName, setCurrentName} from '../actions'

const mapDispatchToProps = dispatch => ({
    addHistoricBabyName: name => dispatch(addHistoricName(name)),
    setCurrentBabyName: name => dispatch(setCurrentName(name))
})

export default connect(
    null,
    mapDispatchToProps
)(NewNameButton)