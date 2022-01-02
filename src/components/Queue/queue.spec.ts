import Queue from './';

let queue: Queue<number>;

beforeEach(() => {
  queue = new Queue<number>();
});

it('test enqueue', () => {
  queue.enqueue(1);
  queue.enqueue(2);

  expect(queue.length).toEqual(2);
  expect(queue.print()).toEqual('1 -> 2 -> null');
});

it('test dequeue', () => {
  queue.enqueue(1);
  queue.enqueue(2);

  expect(queue.dequeue()?.value).toEqual(1);
  expect(queue.length).toEqual(1);
});
