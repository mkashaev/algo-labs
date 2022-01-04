type PairType<T> = [string, T];

interface IHashTable<T> {
  dataMap: PairType<T>[][];
  set: (key: string, value: T) => IHashTable<T>;
  get: (key: string) => T | undefined;
  keys: () => string[];
}

export default class HashTable<T> implements IHashTable<T> {
  public dataMap: PairType<T>[][];

  constructor(n: number = 10) {
    this.dataMap = new Array(n);
  }

  _hash(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }

  set(key: string, value: T) {
    const index = this._hash(key);
    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }
    this.dataMap[index].push([key, value]);
    return this;
  }

  get(key: string): T | undefined {
    const index = this._hash(key);
    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) {
          return this.dataMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const allKeys = new Array<string>();
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          allKeys.push(this.dataMap[i][j][0]);
        }
      }
    }
    return allKeys;
  }
}
