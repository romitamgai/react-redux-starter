import { createAction } from 'redux-actions';

import * as todoService from '../services/todo';

// Action Constants and corresponding types
export const ADD_TODO = 'ADD_TODO';
export const CLEAR_TODOS = 'CLEAR_TODOS';
export const FETCH_TODOS = 'FETCH_TODOS';
export const FETCH_TODOS_PENDING = 'FETCH_TODOS_PENDING';
export const FETCH_TODOS_REJECTED = 'FETCH_TODOS_REJECTED';
export const FETCH_TODOS_FULFILLED = 'FETCH_TODOS_FULFILLED';

// Action creators
export const fetchTodos = createAction(FETCH_TODOS, todoService.fetchTodos);
export const addTodo = createAction(ADD_TODO);
export const clearTodos = createAction(CLEAR_TODOS);
