import { createAction } from 'redux-actions';

const showRequest = createAction(`SHOW_REQUEST`);
const showSuccess = createAction(`SHOW_SUCCESS`);
const showFailure = createAction(`SHOW_FAILURE`);

export { showRequest, showSuccess, showFailure };
