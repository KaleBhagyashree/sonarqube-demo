import { render, fireEvent } from '@testing-library/react';
import { App } from '../App';
import React from 'react';

test('integration flow', () => {
  const { getByText, getByTestId } = render(<App />);
  fireEvent.click(getByText('Increment'));
  fireEvent.click(getByText('Increment'));
  expect(getByTestId('count').textContent).toBe('7');
  fireEvent.click(getByText('OFF'));
  expect(getByTestId('today')).toBeDefined();
});
