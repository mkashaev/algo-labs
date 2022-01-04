import Tree from './index';

let tree: Tree<number>;

beforeEach(() => {
  tree = new Tree<number>();
});

it('test insert', () => {
  const nums = [47, 21, 18, 22, 76, 52, 82];

  nums.forEach((num: number) => {
    tree.insert(num);
  });

  nums.forEach((num: number) => {
    expect(tree.contains(num)).toBeTruthy();
  });

  expect(tree.contains(0)).toBeFalsy();
});
