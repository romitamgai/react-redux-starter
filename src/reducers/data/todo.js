import {
  ADD_TODO,
  CLEAR_TODOS,
  FETCH_TODOS_REJECTED,
  FETCH_TODOS_FULFILLED
} from '../../actions/todo';

import { purgeStore } from '../../store';

export const INITIAL_STATE = {
  todos: [],
  error: {
    code: '',
    message: ''
  }
};

/**
 * Reducer for todo.
 *
 * @param {any} [state=INITIAL_STATE]
 * @param {any} action
 * @returns
 */
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_TODOS_FULFILLED:
      return {
        ...state,
        todos: action.payload.todos
      };

    case FETCH_TODOS_REJECTED:
      return {
        ...state,
        error: {
          code: action.payload.response.data.code,
          message: action.payload.response.data.message
        }
      };

    case ADD_TODO:
      return {
        ...state,
        todos: [].concat(state.todos, {
          id:
            ((state.todos.length && state.todos[state.todos.length - 1].id) ||
              0) + 1,
          title: action.payload
        })
      };

    case CLEAR_TODOS:
      purgeStore();
      return state;

    default:
      return state;
  }
}
