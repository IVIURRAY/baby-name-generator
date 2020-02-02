import { connect } from 'react-redux';
import SavedNames from '../components/savedNames/SavedNames';
import { addToFavourites, removeFromFavourites } from '../actions';

const mapStateToProps = state => ({
    historicNames: state.historicNames,
    favouriteNames: state.favouriteNames
});

const mapDispatchToProps = dispatch => ({
    onAddToFavourite: payload => dispatch(addToFavourites(payload)),
    onRemoveFromFavouite: payload => dispatch(removeFromFavourites(payload))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SavedNames)
