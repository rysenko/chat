import React from 'react';

const MessageInput = ({ sendMessage }) => {
  let input;
  return (
    <div>
      <input type="text" ref={ node => input = node } />
      <button onClick={ () => {
        sendMessage({ id: Math.random(), text: input.value });
        input.value = '';
      }}>send</button>
    </div>
  );
};

MessageInput.propTypes = {
  sendMessage: React.PropTypes.func.isRequired
};

export default MessageInput;
