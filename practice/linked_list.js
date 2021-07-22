// Implementation of a linked list data structure in JavaScript

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  size() {
    let count = 0; 
    let node = this.head;
    while (node) {
      count++;
      node = node.next
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next
      }
    }
    return lastNode
  }

  getFirst() {
    return this.head;
  }

  push(node = null) {
    if (node) {
      let last = this.getLast();
      last.next = node;
    }
  }

  pop() {
    let last = this.head;
    if (last) {
      while (last.next) {
        let current = last;
        last = last.next
        if (!last.next) {
          current.next = null;
          return last;
        }
      }
    }
    return last
  }
}

module.exports = { ListNode, LinkedList };