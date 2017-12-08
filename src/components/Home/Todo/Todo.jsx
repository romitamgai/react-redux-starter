import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'react-proptypes';
import { compose, withHandlers, withState } from 'recompose';

import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { fetchTodos, addTodo, clearTodos } from '../../../actions/todo';

const Todo = props => {
  return (
    <div>
      <TodoForm
        value={props.value}
        todos={props.todos}
        clearTodos={props.onClear}
        onChange={props.onChange}
        handleSubmit={props.onTodoSubmit}
      />
      <TodoList todos={props.todos} />
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.data.todo.todos
});

const mapDispatchToProps = {
  addTodo,
  clearTodos,
  fetchTodos
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),

  withState('value', 'updateValue', ''),

  withHandlers({
    onChange: props => event => {
      props.updateValue(event.target.value);
    },

    onTodoSubmit: props => event => {
      event.preventDefault();
      props.addTodo(props.value);
      props.updateValue('');
    },

    onClear: props => () => {
      props.clearTodos();
    }
  })
);

Todo.propTypes = {
  todos: propTypes.array,
  value: propTypes.string,
  onClear: propTypes.func,
  onChange: propTypes.func,
  onTodoSubmit: propTypes.func
};

export default enhance(Todo);
