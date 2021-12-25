interface IAdjacencyList {
  list: Record<string, string[]>;
  addEdge: (i: string, j: string) => void;
  showGraph: () => void;
}

class AdjacencyList implements IAdjacencyList {
  public list: Record<string, string[]>;

  constructor() {
    this.list = {};
  }

  addEdge(i: string, j: string) {
    if (!this.list[i]) {
      this.list[i] = [];
    }

    if (!this.list[j]) {
      this.list[j] = [];
    }

    this.list[i].push(j);
    this.list[j].push(i);
  }

  showGraph() {
    Object.keys(this.list).map((key: string) => {
      console.log(`${key} --> ${this.list[key]}`);
    });
  }
}

export default AdjacencyList;
