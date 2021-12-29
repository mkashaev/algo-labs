interface INode<T> {
  value: T;
  next: INode<T> | null;
}

interface ILinkedList<T> {
  length: number;
  head: INode<T> | null;
  tail: INode<T> | null;
  push: (value: T) => ILinkedList<T>;
  pop: () => INode<T> | undefined;
  unshift: (value: T) => ILinkedList<T>;
  shift: () => ILinkedList<T>;
  get: (index: number) => INode<T> | undefined;
  set: (index: number, value: T) => INode<T> | undefined;
  insert: (index: number, value: T) => boolean;
  remove: (index: number) => ILinkedList<T>;
  reverse: () => ILinkedList<T>;
  print: () => void;
}

class ListNode<T> implements INode<T> {
  public value: T;
  public next: INode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export default class LinkedList<T> implements ILinkedList<T> {
  public length: number;
  public head: INode<T> | null;
  public tail: INode<T> | null;

  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  print() {
    const printList = [];
    let tmp = this.head;
    while (tmp) {
      printList.push(tmp.value);
      tmp = tmp.next;
    }
    printList.push('null');
    return printList.join(' -> ');
  }

  push(value: T) {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.next = null;
      this.tail = newNode;
    }
    this.length += 1;

    return this;
  }

  pop(): INode<T> | undefined {
    if (!this.head) {
      return undefined;
    }

    if (!this.head.next) {
      const tmp = this.head;
      this.head = null;
      this.tail = null;
      this.length -= 1;

      return tmp;
    }

    let prev = this.head;
    let last = this.head.next;

    while (last?.next) {
      prev = last;
      last = last.next;
    }

    this.tail = prev;
    prev!.next = null;
    this.length -= 1;

    return last;
  }

  unshift(value: T) {
    return this;
  }

  shift() {
    return this;
  }

  get(index: number) {
    return undefined;
  }

  set(index: number, value: T) {
    return undefined;
  }

  insert(index: number, value: T) {
    return false;
  }

  remove(index: number) {
    return this;
  }

  reverse() {
    return this;
  }
}
