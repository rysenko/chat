import React from 'react';
import * as ReactRedux from 'react-redux';

const Main = () => {
  return (
    <div>Chat will be here</div>
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
