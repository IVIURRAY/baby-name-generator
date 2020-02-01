import { connect } from 'react-redux';
import { FirstName } from '../components/names/FirstName';

const mapStateToProps = state => ({
    name: state.currentName.forename
});

export default connect(
    mapStateToProps,
    null
)(FirstName)