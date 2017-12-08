import {
  FETCH_TODOS_PENDING,
  FETCH_TODOS_REJECTED,
  FETCH_TODOS_FULFILLED
} from '../../actions/todo';

const INITIAL_STATE = {
  error: null,
  isLoading: false
};

/**
 * Reducer for todo.
 *
 * @param {any} [state=INITIAL_STATE]
 * @param {any} action
 */
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_TODOS_PENDING:
      return {
        ...state,
        isLoading: true
      };

    case FETCH_TODOS_FULFILLED:
      return {
        ...state,
        isLoading: false,
        error: null
      };

    case FETCH_TODOS_REJECTED:
      return {
        ...state,
        error: action.payload.response.data,
        isLoading: false
      };

    default:
      return state;
  }
}
