// 6.1 Find the length of the shortest path from start to finish. ==============
class Node {
  constructor(id, connections=[], isFinish=false) {
    this.id = id;
    this.connections = connections;
    this.isFinish = isFinish;
  }
}

// Create Nodes
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5, [], true);
const node6 = new Node(6);

// Build connections
node1.connections = [node2, node3];
node2.connections = [node4, node5];
node3.connections = [node4, node6];
node4.connections = [];
node5.connections = [];
node6.connections = [node5];

// Breadth-first search function
function breadthFirstSearch(startNode) {
  let node = startNode;
  let nodeQueue = [node];
  let nodeQueueNext = []; // Queue containing the next set of search nodes
  let steps = 0;

  while (nodeQueue.length > 0) {
    node = nodeQueue.shift();

    if (node.isFinish) {
      console.log(`Found: Node ${node.id} (${steps} steps)`);
      return true;
    }

    nodeQueueNext = nodeQueueNext.concat(node.connections);

    if (nodeQueue.length === 0) {
      nodeQueue = nodeQueue.concat(nodeQueueNext);
      nodeQueueNext = [];
      steps++;
    }
  }

  console.log('Finish could not be found...');
  return false;
}

breadthFirstSearch(node1);

// 6.2 Find the length of the shortest path from “cab” to “bat”. ===============
const nameMap = new Map(); // Use a Map/Hash Table to graph relationships

nameMap.set('CAB', ['CAT', 'CAR']);
nameMap.set('CAT', ['MAT', 'BAT']);
nameMap.set('CAR', ['CAT', 'BAR']);
nameMap.set('MAT', ['BAT']);
nameMap.set('BAR', ['BAT']);
nameMap.set('BAT', []);

function breadthFirstNameSearch(startName, endName) {
  let name = startName;
  let nameQueue = [name];
  let nameQueueNext = []; // Queue containing the next set of search names (+1 steps away)
  let searched = []; // Array containing previously searched names
  let steps = 0;

  while (nameQueue.length > 0) {
    name = nameQueue.shift();

    if (!searched.includes(name)) {
      if (name === endName) {
        console.log(`Found: '${name}' (${steps} steps)`);
        return steps;
      }

      nameQueueNext = nameQueueNext.concat(nameMap.get(name));
      searched.push(name);
    }

    if (nameQueue.length === 0) {
      nameQueue = nameQueue.concat(nameQueueNext.splice(0, nameQueueNext.length));
      steps++;
    }
  }

  console.log('Finish could not be found...');
  return null;
}

breadthFirstNameSearch('CAB', 'BAT');
