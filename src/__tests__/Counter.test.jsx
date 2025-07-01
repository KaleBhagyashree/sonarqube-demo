import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Counter } from '../components/Counter';

test('counter increments and decrements', () => {
  const { getByText, getByTestId } = render(<Counter start={10}/>);
  const count = getByTestId('count');
  expect(count.textContent).toBe('10');
  fireEvent.click(getByText('Increment'));
  expect(count.textContent).toBe('11');
  fireEvent.click(getByText('Decrement'));
  expect(count.textContent).toBe('10');
});
