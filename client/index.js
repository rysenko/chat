import 'babel-polyfill';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import Main from './containers/Main';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';

const store = configureStore({
  messages: [{ id: 1, text: 'one'}, {id: 2, text: 'two' }, { id: 3, text: 'three'}]
});
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} >
      <Route path="/" component={App} >
        <IndexRoute component={Main} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
