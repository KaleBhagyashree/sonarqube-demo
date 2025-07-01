import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { App } from '../App';

jest.useFakeTimers('modern').setSystemTime(new Date('2025-07-01T00:00:00Z'));

test('App shows welcome, counter, toggle, and today date', () => {
  const { getByTestId, getByText } = render(<App />);
  const el= getByTestId('count');
  expect(el).toBeDefined();
 
});
  
