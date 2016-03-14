import React from 'react';
import * as ReactRedux from 'react-redux';
import Messages from '../components/Messages';
import MessageInput from '../components/MessageInput';

const Main = ({ messages }) => {
  return (
    <div>
      <Messages messages={messages} />
      <MessageInput />
    </div>
  );
};

Main.propTypes = {
  messages: React.PropTypes.array.isRequired,
  dispatch: React.PropTypes.func.isRequired
};

Main.displayName = 'Main';

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default ReactRedux.connect(mapStateToProps)(Main);
