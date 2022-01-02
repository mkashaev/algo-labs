interface IDLLNode<T> {
  value: T;
  prev: IDLLNode<T> | null;
  next: IDLLNode<T> | null;
}

class DLLNode<T> implements IDLLNode<T> {
  public value: T;
  public prev: IDLLNode<T> | null = null;
  public next: IDLLNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

interface IDoubleLinkedList<T> {
  head: IDLLNode<T> | null;
  tail: IDLLNode<T> | null;
  length: number;

  print: () => string;
  push: (value: T) => IDoubleLinkedList<T>;
  pop: () => IDLLNode<T> | undefined;
  unshift: (value: T) => IDoubleLinkedList<T>;
  shift: () => IDLLNode<T> | undefined;
  get: (index: number) => IDLLNode<T> | undefined;
  set: (index: number, value: T) => boolean;
  insert: (index: number, value: T) => IDoubleLinkedList<T> | boolean;
  remove: (index: number) => IDLLNode<T> | undefined;
}

export default class DoubleLinkedList<T> implements IDoubleLinkedList<T> {
  public head: IDLLNode<T> | null = null;
  public tail: IDLLNode<T> | null = null;
  public length: number = 0;

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
    const newNode = new DLLNode(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    const tmp = this.tail!;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail!.prev;
      this.tail!.next = null;
      tmp.prev = null;
    }
    this.length -= 1;
    return tmp;
  }

  unshift(value: T) {
    const newNode = new DLLNode(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head!.prev = newNode;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }

  shift() {
    if (this.length === 0) return undefined;
    const tmp = this.head!;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head!.next;
      this.head!.prev = null;
      tmp!.next = null;
    }
    this.length -= 1;
    return tmp;
  }

  get(index: number) {
    if (index < 0 || index > this.length - 1) return undefined;
    let tmp = this.head!;
    // if (index < this.length / 2) {
    //   for (let i = 0; i < index; i++) {
    //     tmp = tmp!.next!;
    //   }
    // } else {
    //   tmp = this.tail!;
    //   for (let i = this.length - 1; i > index; i++) {
    //     tmp = tmp!.prev;
    //   }
    // }
    for (let i = 0; i < index; i++) {
      tmp = tmp!.next!;
    }
    return tmp;
  }

  set(index: number, value: T) {
    const tmp = this.get(index);
    if (tmp) {
      tmp.value = value;
      return true;
    }
    return false;
  }

  insert(index: number, value: T) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;

    const newNode = new DLLNode(value);

    const before = this.get(index - 1)!;
    const after = before!.next;
    before.next = newNode;
    newNode.prev = before;
    newNode.next = after;
    after!.prev = newNode;
    this.length += 1;

    return true;
  }

  remove(index: number) {
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();
    if (index < 0 || index > this.length) return undefined;

    const tmp = this.get(index)!;
    tmp!.prev!.next = tmp.next;
    tmp!.next!.prev = tmp.prev;
    tmp.prev = null;
    tmp.next = null;

    return tmp;
  }
}
