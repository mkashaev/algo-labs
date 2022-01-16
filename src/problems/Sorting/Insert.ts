export const insertSort = (arr: number[]): number[] => {
  for (let i = 1; i < arr.length; i++) {
    let tmp = arr[i];
    for (var j = i - 1; arr[j] > tmp && j > -1; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = tmp;
  }
  return arr;
};
