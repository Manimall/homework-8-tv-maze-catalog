// Реализуйте showMiddleware

// Вам необходимо обработать showRequest
// После получения данных с сервера - диспачте showSuccess
// В случае ошибки showSuccess

// На забудьте вызвать метод next.

import { show } from '../api';
import { showRequest, showSuccess, showFailure } from "../actions/showActions";

const showMiddleware = ({dispatch}) => (next) => (action) => {
	if (action.type === showRequest.toString()) {
		show(action.payload)
			.then(data => {
				console.log(data);
				dispatch(showSuccess(data));
			})
			.catch(error => dispatch(showFailure(error)))
	}
	return next(action);
};

export { showMiddleware };
