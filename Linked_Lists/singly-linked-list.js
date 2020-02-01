const Node = require("../Utils/node");

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    if (this.length <= 0) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;

    return this;
  }

  pop() {
    if (!this.head) {
      return;
    }

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  unshift(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length += 1;

    return this;
  }

  shift() {
    if (!this.head) return;

    let currentHead = this.head;
    this.head = currentHead.next;

    this.length -= 1;

    if (this.legnth === 0) {
      this.head = null;
      this.tail = null;
    }

    return currentHead;
  }

  get(index) {
    if (!this.head || index >= this.length || index < 0) return;

    let i = 0;
    let current = this.head;
    while (i < index) {
      current = current.next;
      i += 1;
    }

    return current;
  }

  set(index, value) {
    let currentNode = this.get(index);

    if (!currentNode) return false;

    currentNode.value = value;

    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.lenght - 1) return !!this.push(value);

    let previousNode = this.get(index - 1);

    if (!previousNode) return false;

    let aftNode = previousNode.next;
    const node = new Node(value);

    node.next = aftNode;
    previousNode.next = node;

    this.length += 1;

    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.shift();
    if (index === this.lenght - 1) return !!this.pop();

    let previousNode = this.get(index - 1);

    if (!previousNode) return false;

    let removedNode = previousNode.next;

    previousNode.next = removedNode.next;

    this.length -= 1;

    return removedNode;
  }

  reverse() {
    if (this.length <= 1) return;

    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;

    let nextNode;
    let previousNode = null;

    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }

    return this;
  }

  print() {
    const arr = [];

    let currentNode = this.head;

    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return arr;
  }
}

const list = new SinglyLinkedList();

list.push(0);
list.push(1);
list.push(2);

list.unshift(-1);
list.unshift(-2);

console.log(list.print());
console.log(list.reverse());
console.log(list.print());
