// @flow
import {createStore, compose, applyMiddleware} from 'redux';
import createHistory from 'history/createBrowserHistory';
// 'routerMiddleware': the new way of storing route changes with redux middleware since rrV4.
import {routerMiddleware} from 'react-router-redux';
import rootReducer from './configureReducers';

type Options = {
  initialState: Object,
};

export const history = createHistory();

function configureStoreProd(options: Options) {

  const {
    initialState,
  } = options;
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [
    // Add other middleware on this line...
    reactRouterMiddleware,
  ];

  return createStore(rootReducer, initialState, compose(
      applyMiddleware(...middlewares)
      )
  );
}

function configureStoreDev(options: Options) {

  const {
    initialState,
  } = options;

  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [
    // Add other middleware on this line...
    reactRouterMiddleware,
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const store = createStore(rootReducer, initialState, composeEnhancers(
      applyMiddleware(...middlewares)
      )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./configureReducers', () => {
      const nextReducer = require('./configureReducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;

