const BaseNode = require("../Utils/node");

class Node extends BaseNode {
  constructor(value) {
    super(value);
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      console.log(this.tail, node);
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }

    this.length += 1;

    return this;
  }

  pop() {
    if (!this.head) return;

    let tailNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.previous;
      this.tail.next = null;

      this.length -= 1;
      tailNode.previous = null;
    }

    return tailNode;
  }

  shift() {
    if (!this.head) return;

    let headNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.previous = null;

      headNode.next = null;
    }

    this.length -= 1;

    return headNode;
  }

  unshift(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.previous = node;
      node.next = this.head;
      this.head = node;
    }

    this.length += 1;

    return this;
  }

  get(index) {
    if (index < 0 || index > this.length) return;

    let term;
    let i;
    let factor;
    let currentNode;

    if (index <= this.length / 2) {
      term = "next";
      i = 0;
      factor = 1;
      currentNode = this.head;
    } else {
      term = "previous";
      i = this.length - 1;
      factor = -1;
      currentNode = this.tail;
    }

    while (i !== index) {
      currentNode = currentNode[term];
      i += factor;
    }

    return currentNode;
  }

  set(index, value) {
    const node = this.get(index);

    if (!node) return false;

    node.value = value;

    return true;
  }

  insert(index, value) {
    if (index === 0) {
      this.unshift(value);
    } else if (index >= this.length - 1) {
      this.push(value);
    } else {
      const currentNode = this.get(index);

      if (!currentNode) return false;

      const node = new Node(value);

      const previousNode = currentNode.previous;

      previousNode.next = node;
      currentNode.previous = node;

      node.next = currentNode;
      node.previous = previousNode;
    }
    return true;
  }

  remove(index) {
    if (index === 0) {
      this.shift();
    } else if (index === this.length - 1) {
      this.pop();
    } else {
      const node = this.get(index);

      if (!node) return false;

      const previousNode = node.previous;
      const nextNode = node.next;

      previousNode.next = nextNode;
      nextNode.previous = previousNode;
    }

    return true;
  }

  reverse() {
    if (!this.head) return;

    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;

    while (currentNode) {
      let nextNode = currentNode.next;
      let previousNode = currentNode.previous;

      currentNode.previous = nextNode;
      currentNode.next = previousNode;

      currentNode = nextNode;
    }

    return this;
  }

  print() {
    const arr = [];

    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }

    return arr;
  }
}

module.exports = DoublyLinkedList;
