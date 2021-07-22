const { ListNode, LinkedList } = require('./linked_list');

describe('LinkedList', () => {
  let node1 = new ListNode(2);
  let node2 = new ListNode(5);
  let node3 = new ListNode(7);
  node1.next = node2;
  node2.next = node3;

  let list = new LinkedList(node1);

  test('check first node', () => {
    let first = list.getFirst();
    expect(first.data).toBe(2);
    expect(first.next).toBeInstanceOf(ListNode);
  });

  test('add node to end of list', () => {
    expect(list.size()).toBe(3);

    let node4 = new ListNode(8);
    list.push(node4);

    expect(list.getLast().data).toBe(8);
    expect(list.size()).toBe(4);
  });

  test('pop/remove last node from list', () => {
    expect(list.size()).toBe(4);

    let last = list.pop();

    expect(last.data).toBe(8);
    expect(list.size()).toBe(3);
    expect(list.getLast().data).toBe(7);
  });

  test('clear list', () => {
    expect(list.head).toBeInstanceOf(ListNode);

    list.clear();

    expect(list.head).toBeNull();
  });
});
