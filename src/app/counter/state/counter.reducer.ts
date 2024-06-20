import { Action, createReducer, on } from '@ngrx/store';
import { customIncrement, decrement, increment, reset } from './counter.action';
import { CounterState } from './counter.state';
import { initialState } from './counter.state';


const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 2,
    };
  }),

  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 2,
    };
  }),

  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),

  on(customIncrement, (state, action) => {
    console.log(action);

    return {
      ...state,
      counter: state.counter + action.value,
    };
  })
);

export function counterReducer(state: CounterState | any, action: Action) {
  return _counterReducer(state, action);
}