const extend = require('extend');
const BinaryNode = require('./BinaryNode.js');

var TreeDictionary = function( options ) {
  var self = this;

  var defaults = {

  }

  self = extend(self, defaults)
  self = extend(self, options)

  // A tree with no nodes. What is its data type? A great mystery.
  var tree;

  // keeps up with the cost of operations since construction. Can be reset to zero from a test.
  this.cost = 0;

  // A tree traversing subroutine, finding the right place to insert the new node.
  function placeNode(node, nodeToInsert) {
    // Increment cost by one for each iteration.
    console.log('Placing a node. Cost: 1')
    self.cost++;
    if (node.item <= nodeToInsert.item) {
      // If node to insert is less than node..

      // If the node does not have a left child..
      if (typeof node.leftChild === "undefined") {
        console.log('Assigning ' + nodeToInsert.item + ' as left child to ' + node.item)
        node.leftChild = nodeToInsert;
      }
      else {
        // If it does, "place" node on the left child..
        placeNode(node.leftChild, nodeToInsert)
      }
    }
    else {
      if (typeof node.rightChild === "undefined") {
        node.rightChild = nodeToInsert;
      }
      else {
        placeNode(node.rightChild, nodeToInsert)
      }
    }

  }

  this.insert = function(item) {
    var newNode = new BinaryNode(item);

    // If the tree has no nodes, insert the first one.
    if (typeof tree === "undefined") {
      // Increment cost by one for each iteration.
      console.log('Inserting the root node. Cost: 1')
      self.cost++;
      tree = newNode;
    }
    // If it does have a root node, begin placing procedure.
    else {
      placeNode(tree, newNode)
    }

  }

  function searchSubTree(subTree, itemToFind) {
    // Increment cost by one for each iteration.
    self.cost++;
    if (subTree.item == itemToFind) {
      return subTree.item;
    }

    if (subTree.item <= itemToFind) {
      searchSubTree(subTree.leftChild, itemToFind);
    }
    else {
      searchSubTree(subTree.rightChild, itemToFind);
    }
  }

  this.get = function(item) {
    // Agent: We'll need a search running. Agent Smith: It has already begun.
    return searchSubTree(tree, item);
  }

  // Debug
  this.getTree = function() {
    return tree;
  }

  return this;
}

module.exports = TreeDictionary;
