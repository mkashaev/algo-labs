import Queue from 'components/Structures/Queue';

interface IGraph {
  list: Record<string, Set<string>>;
}

export default class Graph implements IGraph {
  public list: Record<string, Set<string>>;

  constructor() {
    this.list = {};
  }

  addEdge(i: string, j: string): void {
    if (!this.list[i]) {
      this.list[i] = new Set<string>();
    }

    if (!this.list[j]) {
      this.list[j] = new Set<string>();
    }

    this.list[i].add(j);
    this.list[j].add(i);
  }

  printGraph(): void {
    Object.keys(this.list).map((key: string) => {
      console.log(`${key} ==> ${[...this.list[key]]}`);
    });
  }

  bfs(node: string): void {
    const queue = new Queue<string>();
    const visited: Record<string, boolean> = {};

    queue.push(node);
    visited[node] = true;

    while (queue.length() !== 0) {
      console.log(queue.show());
      const lookNode = queue.peak();
      queue.shift();

      Array.from(this.list[lookNode]).map((node: string) => {
        if (!visited[node]) {
          queue.push(node);
          visited[node] = true;
        }
      });
    }

    console.log(visited);
  }

  bfsDistance(initNode: string, goalNode?: string) {
    const queue = new Queue<string>();
    const visited: Record<string, boolean> = {};
    const dist: Record<string, number> = {};
    const parent: Record<string, string> = {};

    queue.push(initNode);
    visited[initNode] = true;
    parent[initNode] = initNode;
    dist[initNode] = 0;

    while (queue.length() !== 0) {
      const visitNode = queue.peak();
      queue.shift();

      Array.from(this.list[visitNode]).map((node: string) => {
        if (!visited[node]) {
          queue.push(node);
          visited[node] = true;

          parent[node] = visitNode;
          dist[node] = dist[visitNode] + 1;
        }
      });
    }

    if (!goalNode) {
      Object.keys(dist).map((key: string) => {
        console.log(`to: ${key} distance: ${dist[key]}`);
      });
    } else {
      const shortPath = [];
      let tmp = goalNode;
      while (tmp != initNode) {
        shortPath.push(tmp);
        tmp = parent[tmp];
      }
      shortPath.push(tmp);
      console.log(shortPath.reverse().join(' -> '));
    }
  }
}
