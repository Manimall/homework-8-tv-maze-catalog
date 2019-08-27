import { combineReducers } from 'redux';
import search from './searchReducer';
import shows from './showsReducer';

// Вам необходимо реализовать search и shows редьюсеры.
// Создайте соответствующие файлы.

export default combineReducers({
  search,
  shows
});
