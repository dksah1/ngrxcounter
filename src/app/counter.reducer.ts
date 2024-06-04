import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';
export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => {
    if (state <= 0) {
      state = 1;
    }
    return state - 1;
  }),
  on(reset, (state) => 0)
);
