import Stack from './';

let s: Stack<number>;

beforeEach(() => {
  s = new Stack<number>();
});

it('test push', () => {
  s.push(2);
  s.push(1);

  expect(s.print()).toEqual('1 -> 2 -> null');
  expect(s.length).toEqual(2);
});

it('test pop', () => {
  s.push(1);
  s.push(2);
  s.push(3);

  expect(s.pop()?.value).toEqual(3);
  expect(s.length).toEqual(2);
});
