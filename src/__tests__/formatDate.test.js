import { formatDate } from '../utils/formatDate';
import React from 'react';

test('formats date as yyyy-mm-dd', () => {
  const d = new Date('2025-01-02T15:04:05Z');
  expect(formatDate(d)).toBe('2025-01-02');
});

test('throws on non-date', () => {
  expect(() => formatDate('foo')).toThrow('Invalid date');
});
