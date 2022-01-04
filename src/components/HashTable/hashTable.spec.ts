import HashTable from './index';

let ht: HashTable<number>;

beforeEach(() => {
  ht = new HashTable<number>(10);
});

it('test set, get, keys', () => {
  ht.set('foo', 10);
  ht.set('zod', 20);

  expect(ht.get('foo')).toEqual(10);
  expect(ht.get('bar')).toBeUndefined();
  expect(ht.keys()).toEqual(['foo', 'zod']);
});
