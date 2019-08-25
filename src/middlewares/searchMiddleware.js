// Реализуйте searchMiddleware
// Обратите внимание на файл `searchMiddleware.test.js`

// Вам необходимо обработать searchRequest
// После получения данных с сервера - диспачте searchSuccess
// В случае ошибки searchFailure

// На забудьте вызвать метод next.

import { fetchMoviesBegin, fetchMoviesSuccess, fetchMoviesFailure } from '../actions/searchActions';
import { search } from '../api';

const searchMiddleware = (store) => (next) => (action) => {
	if (action.type === fetchMoviesBegin.toString()) {
		console.log(action);
		search(action.payload)
			.then(data => {
				console.log(data);
				store.dispatch(fetchMoviesSuccess(data));
			})
			.catch(error => store.dispatch(fetchMoviesFailure(error)))
	}
	next(action);
};

export { searchMiddleware };
