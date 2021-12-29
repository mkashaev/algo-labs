import { consectuve } from './consectuve';

it('test consectuve', () => {
  const test = [1, 1, 0, 1, 1, 1];
  expect(consectuve(test)).toEqual(3);
});
