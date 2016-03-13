import * as ActionTypes from '../constants/ActionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case ActionTypes.MESSAGES_FETCH_SUCCESS:
      return [...state, ...action.response];
    case ActionTypes.MESSAGES_FETCH_FAILURE:
      return [];
    default:
      return state;
  }
};
