import comments from './comments';
import replies from './replies';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  comments,
  replies,
});

export default reducer;