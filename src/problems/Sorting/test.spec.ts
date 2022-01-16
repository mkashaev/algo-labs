import { bubbleSort } from './Bubble';
import { selectionSort } from './Selection';
import { insertSort } from './Insert';
import { mergeSort } from './Merge';
import { quickSort } from './Quick';

let array: number[];

beforeEach(() => {
  array = [2, 4, 6, 5, 1, 3];
});

it('test bubble sort', () => {
  expect(bubbleSort(array)).toEqual([1, 2, 3, 4, 5, 6]);
});

it('test selection sort', () => {
  expect(selectionSort(array)).toEqual([1, 2, 3, 4, 5, 6]);
});

it('test insert sort', () => {
  expect(insertSort(array)).toEqual([1, 2, 3, 4, 5, 6]);
});

it('test merge sort', () => {
  expect(mergeSort(array)).toEqual([1, 2, 3, 4, 5, 6]);
});

it('test quick sort', () => {
  expect(quickSort(array)).toEqual([1, 2, 3, 4, 5, 6]);
});
