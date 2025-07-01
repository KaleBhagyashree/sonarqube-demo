export function formatDate(date) {
  if (!(date instanceof Date)) throw new Error('Invalid date');
  return date.toISOString().split('T')[0];
}
