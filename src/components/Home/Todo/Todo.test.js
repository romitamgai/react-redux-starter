import React from 'react';
import { render } from 'react-dom';

import Todo from './Todo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Todo />, div);
});
