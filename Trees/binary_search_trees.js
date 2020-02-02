const BaseNode = require("../Utils/node");
const Tree = require("./tree");

class Node extends BaseNode {
  constructor(value) {
    super(value);
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree extends Tree {
  constructor() {
    super();
  }

  traverse(value, node = this.root, i = 0) {
    // console.log(i, value, node.value);
    i += 1;

    if (value > node.value) {
      if (node.right) {
        return this.traverse(value, node.right, i);
      } else {
        return node;
      }
    } else if (value < node.value) {
      if (node.left) {
        return this.traverse(value, node.left, i);
      } else {
        return node;
      }
    } else {
      return node;
    }
  }

  insert(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
    } else {
      let currentNode = this.traverse(value);
      console.log(value, currentNode);
      if (!currentNode) return;

      if (value > currentNode.value) {
        currentNode.right = node;
      } else if (value < currentNode.value) {
        currentNode.left = node;
      }
    }

    return this;
  }
}

const btree = new BinarySearchTree();

btree.insert(1);
btree.insert(2);
btree.insert(-1);
btree.insert(3);
btree.insert(4);
btree.insert(10);
btree.insert(5);
btree.insert(7);

console.log(JSON.stringify(btree));
