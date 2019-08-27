import { createAction } from 'redux-actions';

const fetchMoviesBegin = createAction(`FETCH_MOVIES_BEGIN`);
const fetchMoviesSuccess = createAction(`FETCH_MOVIES_SUCCESS`);
const fetchMoviesFailure = createAction(`FETCH_MOVIES_FAILURE`);

export { fetchMoviesBegin, fetchMoviesSuccess, fetchMoviesFailure };
