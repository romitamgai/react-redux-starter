import React from 'react';
import { render } from 'react-dom';

import TodoList from './TodoList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<TodoList todos={[]} />, div);
});
