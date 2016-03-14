import { MESSAGE_SEND, MESSAGE_RECEIVE } from '../actions/types';

const socket = new WebSocket(location.origin.replace('http', 'ws'));

export default store => {
  socket.onmessage = event => store.dispatch({ type: MESSAGE_RECEIVE, message: JSON.parse(event.data) });
  return next => action => {
    if (action.type !== MESSAGE_SEND) {
      return next(action);
    }
    socket.send(JSON.stringify(action.message));
  };
};
