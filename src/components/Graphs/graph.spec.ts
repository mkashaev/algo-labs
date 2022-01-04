import Graph from './index';

let g: Graph<string>;

beforeEach(() => {
  g = new Graph<string>();
});

it('test add-vertex', () => {
  g.addVertex('A');
  g.addVertex('B');

  expect(g.adjacencyList).toMatchObject({ A: [], B: [] });
});

it('test add-edge', () => {
  g.addVertex('A');
  g.addVertex('B');

  g.addEdge('A', 'B');

  expect(g.adjacencyList).toMatchObject({ A: ['B'], B: ['A'] });
});

it('test remove-edge', () => {
  g.addVertex('A');
  g.addVertex('B');
  g.addEdge('A', 'B');
  expect(g.adjacencyList).toMatchObject({ A: ['B'], B: ['A'] });

  g.removeEdge('A', 'B');
  expect(g.adjacencyList).toMatchObject({ A: [], B: [] });
});

it('test remove-vertex', () => {
  g.addVertex('A');
  g.addVertex('B');
  g.addVertex('C');
  g.addVertex('D');

  g.addEdge('A', 'B');
  g.addEdge('A', 'C');
  g.addEdge('A', 'D');
  g.addEdge('B', 'D');
  g.addEdge('C', 'D');

  console.log(g.adjacencyList);

  expect(g.adjacencyList).toMatchObject({
    A: ['B', 'C', 'D'],
    B: ['A', 'D'],
    C: ['A', 'D'],
    D: ['A', 'B', 'C'],
  });

  g.removeVertex('D');
  expect(g.adjacencyList).toMatchObject({
    A: ['B', 'C'],
    B: ['A'],
    C: ['A'],
  });
});
