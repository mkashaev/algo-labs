interface IQueue<T> {
  // Add to end of queue
  push: (elem: T) => void;

  // Delete from end of queue
  pop: () => T | undefined;

  // Show begin of queue
  peak: () => T | undefined;

  // Delete from begin of queue
  shift: () => void;

  // Show all queue
  show: () => T[];

  length: () => number;
}

export default class Queue<T> implements IQueue<T> {
  private _list: T[];

  constructor() {
    this._list = [];
  }

  push(elem: T) {
    this._list.push(elem);
  }

  pop() {
    return this._list.pop();
  }

  peak() {
    return this._list[0];
  }

  shift() {
    this._list.shift();
  }

  length() {
    return this._list.length;
  }

  show(): T[] {
    return this._list;
  }
}
