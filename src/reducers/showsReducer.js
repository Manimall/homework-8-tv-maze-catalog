import { showRequest, showSuccess, showFailure } from "../actions/showActions";
import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

// превьюшка
const singleShow = handleActions({
	[showRequest]: () => {},
	[showSuccess]: (_state, action) => action.payload
}, {});

// идет ли загрузка
const isLoading = handleActions({
	[showRequest]: () => true,
	[showSuccess]: () => false,
	[showFailure]: () => false,
}, false);

// есть ли ошибка
const error = handleActions({
	[showFailure]: (_state, action) => action.payload,
}, null);


const getShow = (state) => {
	const { singleShow } = state.shows;
	const { _embedded: {cast} } = singleShow;

	return {
		name: singleShow.name,
		image: singleShow.image.medium,
		show: singleShow.summary,
		persons: cast.map(el => el.person),
	}
};

const getIsLoading = (state) => state.shows.isLoading;
const getError = (state) => state.shows.error;


export { getShow, getIsLoading, getError };

export default combineReducers({
	singleShow,
	isLoading,
	error,
})

