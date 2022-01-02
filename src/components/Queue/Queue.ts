interface INode<T> {
  value: T;
  next: INode<T> | null;
}

class QNode<T> implements INode<T> {
  public value: T;
  public next: INode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

interface IQueue<T> {
  first: INode<T> | null;
  last: INode<T> | null;
  length: number;
  print: () => string;
  enqueue: (value: T) => IQueue<T>;
  dequeue: () => INode<T> | undefined;
}

export default class Queue<T> implements IQueue<T> {
  public first: INode<T> | null = null;
  public last: INode<T> | null = null;
  public length: number = 0;

  print() {
    const printList = [];
    let tmp = this.first;
    while (tmp) {
      printList.push(tmp.value);
      tmp = tmp.next;
    }
    printList.push('null');
    return printList.join(' -> ');
  }

  enqueue(value: T) {
    const newNode = new QNode(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last!.next = newNode;
      this.last = newNode;
    }
    this.length += 1;
    return this;
  }

  dequeue() {
    if (this.length === 0) {
      return undefined;
    }
    const tmp = this.first!;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first!.next;
      tmp.next = null;
    }
    this.length -= 1;
    return tmp;
  }
}
