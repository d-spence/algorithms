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
  let pathLength = 0;

  while (nodeQueue.length > 0) {
    node = nodeQueue.shift();

    if (node.isFinish) {
      console.log(`Found: Node ${node.id} (${pathLength} steps)`);
      return true;
    }

    nodeQueueNext = nodeQueueNext.concat(node.connections);

    if (nodeQueue.length === 0) {
      nodeQueue = nodeQueue.concat(nodeQueueNext);
      nodeQueueNext = [];
      pathLength++;
    }
  }

  console.log('Finish could not be found...');
  return false;
}

breadthFirstSearch(node1);