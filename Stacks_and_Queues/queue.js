const { SLL } = require("../Linked_Lists");

class Queue extends SLL {
  constructor(value) {
    super(value);
  }

  enqueue(value) {
    return super.push(value);
  }

  dequeue() {
    return super.shift();
  }
}

module.exports = Queue;
