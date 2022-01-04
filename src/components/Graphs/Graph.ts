type VertexType = string | number;

interface IGraph<T extends VertexType> {
  adjacencyList: Record<T, T[]>;
  addVertex: (vertex: T) => boolean;
  addEdge: (vertex1: T, vertex2: T) => boolean;
  removeEdge: (vertex1: T, vertex2: T) => boolean;
  removeVertex: (vertex: T) => IGraph<T> | undefined;
}

export default class Graph<T extends VertexType> implements IGraph<T> {
  public adjacencyList: Record<T, T[]> = {} as Record<T, T[]>;

  addVertex(vertex: T) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }

  addEdge(vertex1: T, vertex2: T) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      return true;
    }
    return false;
  }

  removeEdge(vertex1: T, vertex2: T) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (vertex: T) => vertex !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (vertex: T) => vertex !== vertex1
      );
      return true;
    }
    return false;
  }

  removeVertex(vertex: T) {
    if (!this.adjacencyList[vertex]) {
      return undefined;
    }

    while (this.adjacencyList[vertex].length) {
      const tmp = this.adjacencyList[vertex].pop();
      if (tmp) {
        this.removeEdge(vertex, tmp);
      }
    }
    delete this.adjacencyList[vertex];

    return this;
  }
}
