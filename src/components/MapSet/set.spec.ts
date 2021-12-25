const unique = (input: string[]): string[] => {
  return [...new Set(input)];
};

it('return unique values', () => {
  const input = ['one', 'one', 'two', 'two', 'three'];
  expect(unique(input)).toEqual(['one', 'two', 'three']);
});
