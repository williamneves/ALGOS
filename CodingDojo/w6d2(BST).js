// Node
class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // all our methods go here
  isEmpty() {
    // This returns true if root is empty which means there is nothing in the tree
    // It returns false if root is NOT null which means something is there
    return this.root == null;
  }

  // How do I find the smallest value in my tree?
  // The smallest value is going to be at the furthest left location
  min() {
    // I need to start at the top of the tree (root)
    // Then I need to go as far left as possible
    // until the node I am on points to null on the left
    var runner = this.root;
    // we need a while loop to take us down the tree
    // Because we don't know how far down the branch goes
    while (runner.left != null) {
      runner = runner.left;
    }
    return runner.value;
  }

  // How do I find the largest value in my tree?
  // The largest value is going to be at the furthest right location
  max() {
    // Start at the top of the tree
    var runner = this.root;
    while (runner.right != null) {
      runner = runner.right;
    }
    return runner.value;
  }

  // Contains
  // Given a value, return true or false whether that value is contained in the tree
  contains(val) {
    // your code here
    if (this.isEmpty()) {
      return false;
    }
    if (this.root.value == val) {
      return true;
    }
    // Set runner
    var runner = this.root;
    while (runner != null) {
      // check if runner.value is == val
      if (runner.value == val) {
        return true;
      }
      // go to left side if value is < than runner.value
      if (val < runner.value) {
        runner = runner.left;
      }
      // go to right side if value is > than runner.value
      else {
        runner = runner.right;
      }

      // nothing find, return false
    }
    return false;
  }

  // Contains recursive
  // Now that you've solved contains iteratively, solve it again but with recursion
  containsRecirsive(val, runner = this.root) {
    // your code here
    if (this.isEmpty()) {
      return false;
    }
    if (this.root.value == val) {
      return true;
    }

    if (runner != null) {
      if (runner.value == val) {
        return true;
      }
      if (val < runner.value) {
        return this.containsRecirsive(val, runner.left);
      }
      // go to right side if value is > than runner.value
      else {
        return this.containsRecirsive(val, runner.right);
      }
    }
    return false;
  }

  // Range
  // Calculate the range of the values in your tree by subtracting the max value from the min value
  range() {
    return Math.abs(this.max() - this.min());
  }
}

var myBST = new BST();
console.log(myBST.isEmpty());
var nodeA = new Node(6);
myBST.root = nodeA;
myBST.root.left = new Node(4);
myBST.root.left.left = new Node(3);
myBST.root.left.left.left = new Node(2);
myBST.root.left.left.left.left = new Node(1);
console.log(myBST.isEmpty());
console.log(myBST.min());
myBST.root.right = new Node(10);
myBST.root.right.right = new Node(12);
myBST.root.right.right.right = new Node(16);
// console.log(myBST.contains(7), "7")
console.log(myBST.containsRecirsive(7), "7");
// console.log(myBST.contains(1),"1")
console.log(myBST.containsRecirsive(1), "1");
console.log(myBST.max());
console.log(myBST.range());
