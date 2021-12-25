import AdjacencyList from 'components/Graphs/AdjacencyList';
import Graph from 'components/Graphs/BFS';

const g = new Graph();

g.addEdge('1', '2');
g.addEdge('1', '0');
g.addEdge('2', '3');
g.addEdge('0', '4');
g.addEdge('3', '5');
g.addEdge('3', '4');
g.addEdge('4', '3');
g.addEdge('4', '5');
g.addEdge('5', '6');

g.bfsDistance('1');
console.log(' === ');
g.bfsDistance('1', '6');
