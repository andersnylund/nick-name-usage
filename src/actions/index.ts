import { Action } from 'redux';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const incrementAction: Action = {
  type: INCREMENT
};

export const decrementAction: Action = {
  type: DECREMENT
};
