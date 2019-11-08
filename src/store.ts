import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import todosReducer from './reducers/todoReducer';
import { todosSaga } from './sagas/todoSagas';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  todos: todosReducer
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(todosSaga);

export type AppState = ReturnType<typeof reducer>;

export default store;
