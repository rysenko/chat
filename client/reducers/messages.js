import { MESSAGE_RECEIVE } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case MESSAGE_RECEIVE:
      return [ ...state, action.message ];
    default:
      return state;
  }
};
