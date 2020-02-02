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

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.print());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack.print());
