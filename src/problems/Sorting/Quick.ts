const swap = (arr: number[], i: number, j: number): void => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

const pivot = (
  arr: number[],
  pivotIdx: number = 0,
  endIdx: number = arr.length - 1
): number => {
  let swapIdx = pivotIdx;
  for (let i = pivotIdx + 1; i <= endIdx; i++) {
    if (arr[i] < arr[pivotIdx]) {
      swapIdx++;
      swap(arr, i, swapIdx);
    }
  }
  swap(arr, pivotIdx, swapIdx);
  return swapIdx;
};

export const quickSort = (
  arr: number[],
  left: number = 0,
  rigth: number = arr.length - 1
): number[] => {
  if (left < rigth) {
    const pivotIdx = pivot(arr, left, rigth);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, rigth);
  }
  return arr;
};
