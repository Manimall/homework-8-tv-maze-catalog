// Реализуйте страницу поиска.
// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.
import {connect} from 'react-redux';
import { Search } from './SearchPresentation';
import { getShows, getIsLoading, getError } from "../../reducers/searchReducer";
import {fetchMoviesBegin} from '../../actions/searchActions';


const mapStateToProps = (state) => ({
	shows: getShows(state),
	isLoading: getIsLoading(state),
	error: getError(state),
});

const mapDispatchToProps = (dispatch) => ({
	fetchMoviesBegin: (value) => dispatch(fetchMoviesBegin(value)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Search);
