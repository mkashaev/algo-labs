import Queue from './index';

let queue: Queue<string>;

beforeEach(() => {
  queue = new Queue<string>();

  queue.push('1');
  queue.push('2');
  queue.push('3');
  queue.push('4');
  queue.push('5');
});

it('show queue', () => {
  expect(queue.show()).toEqual(['1', '2', '3', '4', '5']);
});

it('show length', () => {
  expect(queue.length()).toEqual(5);
});

it('push element', () => {
  queue.push('6');
  expect(queue.show()).toEqual(['1', '2', '3', '4', '5', '6']);
});

it('pop element', () => {
  expect(queue.pop()).toEqual('5');
  expect(queue.show()).toEqual(['1', '2', '3', '4']);
});

it('peak element', () => {
  expect(queue.peak()).toEqual('1');
  expect(queue.show()).toEqual(['1', '2', '3', '4', '5']);
});

it('shift element', () => {
  queue.shift();
  expect(queue.show()).toEqual(['2', '3', '4', '5']);
});
