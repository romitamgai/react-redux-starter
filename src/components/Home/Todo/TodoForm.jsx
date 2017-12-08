import React from 'react';
import propTypes from 'react-proptypes';

const TodoForm = props => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          placeholder="Add todo"
          onChange={props.onChange}
          value={props.value}
        />
      </form>
      {props.todos.length ? (
        <button onClick={props.clearTodos}>Clear Todos</button>
      ) : null}
    </div>
  );
};

TodoForm.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
  todos: propTypes.array,
  clearTodos: propTypes.func,
  handleSubmit: propTypes.func
};

export default TodoForm;
