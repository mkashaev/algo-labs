interface INode<T> {
  value: T;
  left: INode<T> | null;
  right: INode<T> | null;
}

class TNode<T> implements INode<T> {
  public value: T;
  public left: INode<T> | null = null;
  public right: INode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

interface ITree<T> {
  root: INode<T> | null;
  insert: (value: T) => ITree<T> | undefined;
  contains: (value: T) => boolean;
}

export default class Tree<T> implements ITree<T> {
  public root: INode<T> | null = null;

  insert(value: T) {
    const newNode = new TNode(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let tmp = this.root;

    while (true) {
      if (newNode.value === tmp.value) {
        return undefined;
      }
      if (newNode.value < tmp.value) {
        if (tmp.left === null) {
          tmp.left = newNode;
          return this;
        }
        tmp = tmp.left;
      } else {
        if (tmp.right === null) {
          tmp.right = newNode;
          return this;
        }
        tmp = tmp.right;
      }
    }
  }

  contains(value: T) {
    if (this.root === null) {
      return false;
    }
    let tmp: INode<T> | null = this.root;
    while (tmp) {
      if (value < tmp.value) {
        tmp = tmp.left;
      } else if (tmp.value > value) {
        tmp = tmp.right;
      } else {
        return true;
      }
    }
    return false;
  }
}
