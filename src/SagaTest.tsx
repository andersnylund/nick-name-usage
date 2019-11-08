import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AppState } from './store';
import { TodosActionEnum } from './sagas/todoSagas';

const SagaTest = () => {
  const todoState = useSelector((state: AppState) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: TodosActionEnum.Requested });
  }, [dispatch]);

  if (todoState.loading) {
    return <p>Loading</p>;
  }

  if (todoState.error) {
    return <p>{todoState.error}</p>;
  }

  return (
    <ul>
      {todoState.todos.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default SagaTest;
