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
  shift: () => INode<T> | undefined;
  get: (index: number) => INode<T> | undefined;
  set: (index: number, value: T) => INode<T> | undefined;
  insert: (index: number, value: T) => boolean;
  remove: (index: number) => boolean;
  reverse: () => ILinkedList<T>;
  print: () => string;
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

  push(value: T): ILinkedList<T> {
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

  unshift(value: T): ILinkedList<T> {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;

    return this;
  }

  shift(): INode<T> | undefined {
    if (!this.head) {
      return undefined;
    }

    const tmp = this.head;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = this.head!.next;
      tmp.next = null;
    }

    this.length -= 1;

    return tmp;
  }

  get(index: number): INode<T> | undefined {
    if (index < 0 || index > this.length - 1) {
      return undefined;
    }
    let tmp = this.head;
    for (let i = 0; i < index; i++) {
      tmp = tmp!.next;
    }

    return tmp!;
  }

  set(index: number, value: T) {
    const node = this.get(index);
    if (node) {
      node.value = value;
      return node;
    }
    return undefined;
  }

  insert(index: number, value: T) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === this.length) {
      this.push(value);
      return true;
    }

    if (index === 0) {
      this.unshift(value);
      return true;
    }

    const newNode = new ListNode(value);
    const tmp = this.get(index - 1);

    newNode.next = tmp!.next;
    tmp!.next = newNode;
    this.length += 1;
    return true;
  }

  remove(index: number): boolean {
    if (index < 0 || index > this.length - 1) {
      return false;
    }

    if (index === 0) {
      this.shift();
      return true;
    }

    if (index === this.length - 1) {
      this.pop();
      return true;
    }

    const before = this.get(index - 1);
    const tmp = before!.next;
    before!.next = tmp!.next;
    tmp!.next = null;
    this.length -= 1;

    return true;
  }

  reverse(): ILinkedList<T> {
    if (this.length < 2) {
      return this;
    }

    let prev = null;
    let tmp = this.head;
    let next: INode<T> | null = this.head!.next;

    this.head = this.tail;
    this.tail = tmp;

    for (let i = 0; i < this.length; i++) {
      tmp!.next = prev;

      prev = tmp;
      tmp = next;
      next = next?.next ? next.next : null;
    }

    return this;
  }
}
