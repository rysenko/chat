import { MESSAGE_SEND } from './types';

export function sendMessage(message) {
  return dispatch => {
    return dispatch({
      type: MESSAGE_SEND,
      message
    });
  };
}
