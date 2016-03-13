import * as Redux from 'redux';
import * as ReactRouterRedux from'react-router-redux';
import reducers from '../reducers';

export default function configureStore(initialState) {
  const store = Redux.createStore(Redux.combineReducers({
    ...reducers,
    routing: ReactRouterRedux.routerReducer
  }), initialState);
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
