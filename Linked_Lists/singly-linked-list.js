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
    if (!this.head || this.length - 1 < index) return;

    let i = 0;
    let current = this.head;
    while (i < index) {
      current = current.next;
    }

    return current;
  }
}

const list = new SinglyLinkedList();

list.push(0);
list.push(1);
list.push(2);

list.unshift(-1);
list.unshift(-2);

console.log(list);
