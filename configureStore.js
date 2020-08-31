import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import app from './reducers';
import thunk from 'redux-thunk';

export default function configureStore() {
  let store = createStore(app, composeWithDevTools(applyMiddleware(thunk)));
  return store;
}
