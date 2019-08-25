import RootReducer from './reducers';
import { createStore, compose, applyMiddleware } from 'redux';
import { searchMiddleware } from './middlewares/searchMiddleware';
import { showMiddleware } from './middlewares/showMiddleware';

const getStore = () => {
	return createStore(
		RootReducer,
		compose(
			applyMiddleware(
				searchMiddleware,
				// showMiddleware,
			),
	window.__REDUX_DEVTOOLS_EXTENSION__
			? window.__REDUX_DEVTOOLS_EXTENSION__()
			: noop => noop,
		),
	);
};

export default getStore;
