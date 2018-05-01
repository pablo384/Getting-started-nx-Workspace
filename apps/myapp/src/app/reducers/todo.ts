import { Action } from '@ngrx/store';

export const REMOVE_TODO = 'REMOVE_TODO';
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

export function todoReducer(state: number = 0, action: Action) {
  switch (action.type) {
    case REMOVE_TODO:
      return state + 1;

    case ADD_TODO:
      return state - 1;

    case COMPLETE_TODO:
      return 0;

    default:
      return state;
  }
}
