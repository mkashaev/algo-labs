export const selectionSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      let tmp = arr[min];
      arr[min] = arr[i];
      arr[i] = tmp;
    }
  }
  return arr;
};
