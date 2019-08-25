// Реализуйте searchMiddleware
// Обратите внимание на файл `searchMiddleware.test.js`

// Вам необходимо обработать searchRequest
// После получения данных с сервера - диспачте searchSuccess
// В случае ошибки searchFailure

// На забудьте вызвать метод next.

import { fetchMoviesBegin, fetchMoviesSuccess, fetchMoviesFailure } from '../actions/searchActions';
import { search } from '../api';

const searchMiddleware = (store) => (next) => (action) => {
	console.log(action);
	console.log(store.getState());
	console.log(fetchMoviesBegin.toString());
	return next(action);
};

export { searchMiddleware };
