import React from 'react';
import * as ReactRedux from 'react-redux';
import Messages from '../components/Messages';
import MessageInput from '../components/MessageInput';
import { sendMessage } from '../actions/creators';

const Main = ({ messages, sendMessage }) => {
  return (
    <div>
      <Messages messages={messages} />
      <MessageInput sendMessage={sendMessage} />
    </div>
  );
};

Main.propTypes = {
  messages: React.PropTypes.array.isRequired,
  sendMessage: React.PropTypes.func.isRequired
};

Main.displayName = 'Main';

export default ReactRedux.connect(state => ({ messages: state.messages }), { sendMessage })(Main);
