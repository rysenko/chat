import React from 'react';

const Messages = ({ messages }) => {
  return (
    <ul>
      {messages.map(message => <li key={message.id}>{message.text}</li>)}
    </ul>
  );
};

Messages.propTypes = {
  messages: React.PropTypes.array.isRequired
};

Messages.displayName = 'Messages';

export default Messages;
