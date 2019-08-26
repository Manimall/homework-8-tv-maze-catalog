// Реализуйте searchMiddleware
// Обратите внимание на файл `searchMiddleware.test.js`

// Вам необходимо обработать searchRequest
// После получения данных с сервера - диспачте searchSuccess
// В случае ошибки searchFailure

// На забудьте вызвать метод next.

import { fetchMoviesBegin, fetchMoviesSuccess, fetchMoviesFailure } from '../actions/searchActions';
import { search } from '../api';

const searchMiddleware = ({dispatch}) => (next) => (action) => {
	if (action.type === fetchMoviesBegin.toString()) {
		search(action.payload)
			.then(data => dispatch(fetchMoviesSuccess(data)))
			.catch(error => dispatch(fetchMoviesFailure(error)))
	}
	return next(action);
};

export { searchMiddleware };
