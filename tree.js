/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if(!this.root){
      return 0;
    } 

    let sum = 0;

    let queue = [this.root];

    while(queue.length){
      let qLength = queue.length;

      while (qLength > 0){

        let p = queue[0];
        queue.shift();
        sum += p.val

        for(let i = 0; i < p.children.length; i++){
          queue.push(p.children[i])
        }
        qLength--;
      }
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if(!this.root){
      return 0;
    }

    let count = this.root.val % 2 === 0 ? 1 : 0;

    function countEvens(node){

      for(let nodes of node.children){

        if(nodes.val % 2 === 0){
          count++
        }

        if(nodes.children.length > 0){
          countEvens(nodes)
        }
      }
    }
    countEvens(this.root);
    return count;

  }
  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if(!this.root){
      return 0;
    }

    let count = this.root.val > lowerBound ? 1 : 0;

    function countNums(node){
      for(let nodes of node.children){
        if(nodes.val > lowerBound){
          count++
        }
        if(nodes.children.length > 0){
          countNums(nodes)
        }
      }
    }
    countNums(this.root);
    return count;
  }
}

// module.exports = { Tree, TreeNode };
