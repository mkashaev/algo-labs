import LinkedList from './LinkedList';

let ll: LinkedList<number>;

beforeEach(() => {
  ll = new LinkedList<number>();
});

it('check push', () => {
  ll.push(1);

  expect(ll?.head?.value).toEqual(1);
  expect(ll?.tail?.value).toEqual(1);
});

it('check print', () => {
  ll.push(1);
  expect(ll.print()).toEqual('1 -> null');
});

it('check pop', () => {
  ll.push(1);
  expect(ll.pop()).toMatchObject({ value: 1, next: null });
  expect(ll.head).toEqual(null);
  expect(ll.tail).toEqual(null);

  ll.push(1);
  ll.push(2);
  ll.push(3);

  expect(ll.head?.value).toEqual(1);
  expect(ll.tail?.value).toEqual(3);
  expect(ll.length).toEqual(3);
});

it('check unshift', () => {
  ll.push(1);
  ll.unshift(0);

  expect(ll.head?.value).toEqual(0);
  expect(ll.tail?.value).toEqual(1);
  expect(ll.length).toEqual(2);
});

it('check shift', () => {
  ll.push(1);
  expect(ll.shift()).toMatchObject({ value: 1, next: null });
  expect(ll.head).toEqual(null);
  expect(ll.tail).toEqual(null);

  ll.push(1);
  ll.push(2);
  ll.push(3);

  ll.shift();
  expect(ll.head?.value).toEqual(2);
  expect(ll.tail?.value).toEqual(3);
  expect(ll.length).toEqual(2);
});

it('check get', () => {
  ll.push(1);
  ll.push(2);
  ll.push(3);

  expect(ll.get(0)?.value).toEqual(1);
  expect(ll.get(1)?.value).toEqual(2);
  expect(ll.get(2)?.value).toEqual(3);
  expect(ll.get(-1)?.value).toEqual(undefined);
  expect(ll.get(3)?.value).toEqual(undefined);
});

it('check set', () => {
  ll.push(1);
  ll.push(2);
  ll.push(3);

  expect(ll.get(1)?.value).toEqual(2);

  ll.set(1, 5);
  expect(ll.get(1)?.value).toEqual(5);

  expect(ll.set(3, 10)).toEqual(undefined);
});

it('check insert', () => {
  ll.push(1);
  ll.push(2);
  ll.push(3);

  ll.insert(1, 0);
  expect(ll.length).toEqual(4);

  const obj1 = ll.get(0)!.next;
  const obj2 = ll.get(1);

  expect(obj1 && obj2).toBeTruthy();
  if (obj1 && obj2) {
    expect(obj1).toMatchObject(obj2);
  }
});

it('check remove', () => {
  ll.push(1);
  ll.push(2);
  ll.push(3);

  ll.remove(1);

  const obj1 = ll.get(1);
  const obj2 = ll.tail;
  expect(obj1 && obj2).toBeTruthy();

  if (obj1 && obj2) {
    expect(obj1).toMatchObject(obj2);
  }
});

it('check reverse', () => {
  ll.push(1);
  ll.push(2);
  ll.push(3);

  ll.reverse();

  expect(ll.head?.value).toEqual(3);
  expect(ll.tail?.value).toEqual(1);

  expect(ll.get(0)?.value).toEqual(3);
  expect(ll.get(1)?.value).toEqual(2);
  expect(ll.get(2)?.value).toEqual(1);
});
