import React from 'react';

const App = ({ children }) =>
  (
    <div>
      {children}
    </div>
  );

App.displayName = 'Application';

export default App;
