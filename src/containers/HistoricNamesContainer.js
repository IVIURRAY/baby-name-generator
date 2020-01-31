import { connect } from 'react-redux';
import {HistoricNames} from '../components/historicNames/HistoricNames';

const mapStateToProps = state => ({
    historicNames: state.historicNames
});

export default connect(
    mapStateToProps,
    null
)(HistoricNames)