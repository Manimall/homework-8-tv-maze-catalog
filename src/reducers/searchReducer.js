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
	[fetchMoviesBegin]: true,
	[fetchMoviesSuccess]: false,
	[fetchMoviesFailure]: false,
}, false);

// есть ли ошибка
const error = handleActions({
	[fetchMoviesFailure]: true,
}, null);

export default combineReducers({
	shows,
	isLoading,
	error,
});


