/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    //if tree is empty
    if( !this.root ){
      return 0;
    }

    //Stores minimum depth
    let depth = 0;
    
    let queue = [this.root];

    let current;

    //while queue is not empty
    while(queue.length){
      let queueLen = queue.length;


      for(let i = 0; i < queueLen; i++){
        //Removes first node
        current = queue.shift()

        //if the current node is a leaf
        if(!current.left && !current.right){
          depth++
          return depth
        }

        //if node has children, add them to queue
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
      }
      depth++
    }
    return depth;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {

    if( !this.root ){
      return 0;
    }

    let depth = 0;

    let current;

    let queue = [this.root];

    while(queue.length){
      let queueLen = queue.length;


      for(let i = 0; i < queueLen; i++){
        //Removes first node
        current = queue.shift()

        //if node has children, add them to queue
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
      }
      depth++
    }
    return depth;

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    //Keeps track of path max
    let max = 0;

    //Nested function to traverse tree || Depth first search
    function findMaxSum(root){
      //If there isnt a root
      if(!root) return 0;


      const left = findMaxSum(root.left);
      const right = findMaxSum(root.right);
      const leftAndVal = left + root.val;
      const rightAndVal = right + root.val;
      const all = left + right + root.val;

      let currentMax = Math.max(leftAndVal, rightAndVal, all, root.val);

      max = Math.max(currentMax, max);
      return Math.max(root.val, leftAndVal, rightAndVal)
    }


    findMaxSum(this.root)
    return max;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if(!this.root){
      return null;
    }

    let current;

    let queue = [this.root];
    let closest = null

    while(queue.length){
      current = queue.shift()
      let currentVal = current.val;

      let greaterThanLowerBound = currentVal > lowerBound
      let reassignClosest = currentVal < closest || closest === null;

      if (greaterThanLowerBound && reassignClosest) {
        closest = currentVal;
      }

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return closest
  }
}

// module.exports = { BinaryTree, BinaryTreeNode };
