import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import messages from './messages';

export default combineReducers({
  messages,
  routing
});
