import DoubleLinkedList from './';

let dll: DoubleLinkedList<number>;

beforeEach(() => {
  dll = new DoubleLinkedList<number>();
});

it('test push', () => {
  dll.push(1);
  dll.push(2);
  dll.push(3);

  expect(dll.print()).toEqual('1 -> 2 -> 3 -> null');
});

describe('test pop', () => {
  it('test pop for empty list', () => {
    expect(dll.pop()).toBeUndefined();
    expect(dll.length).toEqual(0);
  });

  it('test pop for not empty list', () => {
    dll.push(1);
    dll.push(2);

    const res = dll.pop();
    expect(res).toEqual(expect.anything());
    expect(res).toMatchObject({ value: 2, prev: null, next: null });
    expect(dll.length).toEqual(1);
  });
});

it('test shift', () => {
  dll.push(1);
  dll.push(2);
  dll.push(3);

  expect(dll.shift()).toMatchObject({ value: 1, prev: null, next: null });
  expect(dll.length).toEqual(2);
});

it('tes get', () => {
  dll.push(0);
  dll.push(1);
  dll.push(2);
  dll.push(3);

  expect(dll.get(0)?.value).toEqual(0);
  expect(dll.get(1)?.value).toEqual(1);
  expect(dll.get(2)?.value).toEqual(2);
  expect(dll.get(3)?.value).toEqual(3);
  expect(dll.length).toEqual(4);
});

it('test set', () => {
  dll.push(0);
  dll.set(0, 1);

  expect(dll.get(0)?.value).toEqual(1);
});

it('test insert', () => {
  dll.push(0);
  dll.push(2);

  dll.insert(1, 1);

  expect(dll.print()).toEqual('0 -> 1 -> 2 -> null');
});

it('test remove', () => {
  dll.push(0);
  dll.push(1);
  dll.push(2);

  dll.remove(1);

  expect(dll.print()).toEqual('0 -> 2 -> null');
});
