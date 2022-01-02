interface INode<T> {
  value: T;
  next: INode<T> | null;
}

class SNode<T> implements INode<T> {
  public value: T;
  public next: INode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

interface IStack<T> {
  top: INode<T> | null;
  length: number;
  push: (value: T) => IStack<T>;
  pop: () => INode<T> | undefined;
  print: () => string;
}

export default class Stack<T> implements IStack<T> {
  public top: INode<T> | null = null;
  public length: number = 0;

  print() {
    const printList = [];
    let tmp = this.top;
    while (tmp) {
      printList.push(tmp.value);
      tmp = tmp.next;
    }
    printList.push('null');
    return printList.join(' -> ');
  }

  push(value: T) {
    const newNode = new SNode(value);
    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    const tmp = this.top!;
    this.top = this.top!.next;
    tmp!.next = null;
    this.length -= 1;

    return tmp;
  }
}
