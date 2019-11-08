import { TodosAction } from '../sagas/todoSagas';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: string | undefined;
}

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: undefined
};

const reducer = (state = initialState, action: TodosAction): TodoState => {
  switch (action.type) {
    case 'TODOS_FETCH_REQUESTED':
      return {
        todos: state.todos,
        loading: true,
        error: undefined
      };
    case 'TODOS_FETCH_SUCCEEDED':
      return {
        todos: action.todos,
        loading: false,
        error: undefined
      };
    case 'TODOS_FETCH_FAILED':
      return {
        todos: state.todos,
        loading: false,
        error: action.message
      };
    default:
      return state;
  }
};

export default reducer;
