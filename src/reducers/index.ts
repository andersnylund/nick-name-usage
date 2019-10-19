import { Action } from 'redux';
import { DECREMENT, INCREMENT } from '../actions/index';

interface IndexState {
  counter: number;
}

const initialState: IndexState = {
  counter: 0
};

const reducer = (state = initialState, action: Action): IndexState => {
  if (action.type === INCREMENT) {
    return {
      counter: state.counter + 1
    };
  }
  if (action.type === DECREMENT) {
    return {
      counter: state.counter - 1
    };
  } else {
    return state;
  }
};

export default reducer;
