const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary lookForNode tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    this.rootNode === null
      ? (this.rootNode = newNode)
      : this.createNode(this.rootNode, newNode);
  }

  createNode(node, newNode) {
    if (newNode.data < node.data) {
      node.left === null
        ? (node.left = newNode)
        : this.createNode(node.left, newNode);
    } else {
      node.right === null
        ? (node.right = newNode)
        : this.createNode(node.right, newNode);
    }
  }

  lookForNode(node, data) {
    if (node === null) return null;
    else if (data < node.data) return this.lookForNode(node.left, data);
    else if (data > node.data) return this.lookForNode(node.right, data);
    else return node;
  }

  has(data) {
    return this.lookForNode(this.rootNode, data) === null ? false : true;
  }

  find(data) {
    return this.lookForNode(this.rootNode, data);
  }

  searchMin(node) {
    if (node.left === null) return node;
    else return this.searchMin(node.left);
  }

  remove(data) {
    this.deleteNode(this.rootNode, data);
  }

  deleteNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      node.left = this.deleteNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.deleteNode(node.right, data);
      return node;
    } else if (data === node.data) {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      } else if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      const newNode = this.searchMin(node.right);
      node.data = newNode.data;
      node.right = this.deleteNode(node.right, newNode.data);
      return node;
    }
  }

  min() {
    return this.searchMin(this.rootNode).data;
  }

  max() {
    return searchMax(this.rootNode).data;
    function searchMax(node) {
      if (node.right === null) return node;
      else return searchMax(node.right);
    }
  }
}

module.exports = {
  BinarySearchTree,
};
