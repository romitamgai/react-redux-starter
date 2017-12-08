import React from 'react';
import propTypes from 'react-proptypes';

const TodoList = props => {
  return (
    <div>
      {props.todos.map(todo => {
        return (
          <div key={todo.id}>
            {todo.id} : {todo.title}
          </div>
        );
      })}
    </div>
  );
};

TodoList.propTypes = {
  todos: propTypes.array
};

export default TodoList;
