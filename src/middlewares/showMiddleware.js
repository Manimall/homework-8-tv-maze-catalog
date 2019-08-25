// Реализуйте showMiddleware

// Вам необходимо обработать showRequest
// После получения данных с сервера - диспачте showSuccess
// В случае ошибки showSuccess

// На забудьте вызвать метод next.

import { show } from '../api';

const showMiddleware = (store) => (next) => (action) => {
	//
};

export { showMiddleware };
