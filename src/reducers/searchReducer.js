import { fetchMoviesBegin, fetchMoviesSuccess, fetchMoviesFailure } from '../actions/searchActions';
import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

// our movies
const shows = handleActions({
	[fetchMoviesBegin]: () => [],
	[fetchMoviesSuccess]: (_state, action) => action.payload,
}, []);

// идет ли загрузка
const isLoading = handleActions({
	[fetchMoviesBegin]: () => true,
	[fetchMoviesSuccess]: () => false,
	[fetchMoviesFailure]: () => false,
}, false);

// есть ли ошибка
const error = handleActions({
	[fetchMoviesFailure]: (_state, action) => action.payload,
}, null);

// selectors
const getShows = (state) => {
	const {shows} = state.search;

	return shows.map(show => ({
		id: show.id,
		name: show.name,
		summary: show.summary,
		image: show.image.medium
	}));
};

const getIsLoading = (state) => state.search.isLoading;
const getError = (state) => state.search.error;


export { getShows, getIsLoading, getError };

export default combineReducers({
	shows,
	isLoading,
	error,
});
