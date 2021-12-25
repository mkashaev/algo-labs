interface INode {
  name: string;
  list: string[];
}

interface IAdjacencyNodes {
  list: Map<string, INode>;
}

export default class AdjacencyNodes implements IAdjacencyNodes {
  public list: Map<string, INode>;

  constructor() {
    this.list = new Map<string, INode>();
  }

  addEdge(i: number, j: number, undir: boolean = true): void {}
}
