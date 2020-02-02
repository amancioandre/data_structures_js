const { SLL } = require("../Linked_Lists");

class Stack extends SLL {
  constructor(value) {
    super(value);
  }

  push(value) {
    return super.unshift(value);
  }

  pop() {
    return super.shift();
  }
}

module.exports = Stack;
