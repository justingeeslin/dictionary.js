
function BinaryNode(item) {
  this.item;
  this.leftChild;
  this.rightChild;

  if (typeof item !== "undefined") {
    this.item = item;
  }

  return item;
}

module.exports = BinaryNode;
