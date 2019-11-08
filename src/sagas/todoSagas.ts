import { call, put, takeEvery } from 'redux-saga/effects';
import { Todo } from '../reducers/todoReducer';

export const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

export enum TodosActionEnum {
  Requested = 'TODOS_FETCH_REQUESTED',
  Succeeded = 'TODOS_FETCH_SUCCEEDED',
  Failed = 'TODOS_FETCH_FAILED'
}

export interface TodosAction {
  type: TodosActionEnum;
  todos: Todo[];
  message: string;
}

export function* fetchTodos() {
  try {
    const response: Response = yield call(fetch, apiUrl);
    const todos = yield response.json();
    yield put({ type: 'TODOS_FETCH_SUCCEEDED', todos });
  } catch (e) {
    yield put({ type: 'TODOS_FETCH_FAILED', message: e.message });
  }
}

export function* todosSaga() {
  yield takeEvery('TODOS_FETCH_REQUESTED', fetchTodos);
}
