import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import indexReducer from './reducers/index';

const reducer = combineReducers({
  index: indexReducer
});

const store = createStore(reducer, composeWithDevTools());

export type AppState = ReturnType<typeof reducer>;

export default store;
