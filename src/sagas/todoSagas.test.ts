import { call } from 'redux-saga/effects';
import { fetchTodos, apiUrl } from './todoSagas';

describe('todoSaga.ts', () => {
  const saga = fetchTodos();
  it('should call fetch', () => {
    expect(saga.next().value).toEqual(call(fetch, apiUrl));
  });

  it('should get the json response', () => {
    expect(saga.next().value).toEqual({});
  });
});
