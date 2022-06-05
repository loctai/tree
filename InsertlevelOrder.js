class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null
    }
  }
  class Tree {
    constructor() {
      this.root = null;
    }
  
    randomly(value) {
      let node = this.root;
      if (!node) {
        node = new Node(value);
      }
      const shouldGoLeft = Math.random() >= 0.5;
      if (!node.left || shouldGoLeft) {
  
      }
    }
    insert(value) {
      const shouldGoLeft = Math.random() >= 0.5;
      let position = shouldGoLeft ? "left" : "right";
      const newNode = new Node(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode, position);
      }
    }
    insertNode(node, newNode, position) {
  
      if (position == "left") {
        if (node.left === null) {
          node.left = newNode;
          return;
        }
        this.insertNode(node.left, newNode, position);
      } else {
        if (node.right === null) {
          node.right = newNode;
          return;
        }
        this.insertNode(node.right, newNode, position);
      }
    }
    InsertlevelOrder(value) {
        let root = this.root;
        let newNode = new Node(value)
        const queue = [root];
        let loop = true
        while (queue.length) {
          const length = queue.length;
          for (let i = 0; i < length; i++) {
            const current = queue.shift();
            if (!current.left) {
              current.left = newNode;
              loop = false;
              return;
            } else if (!current.right) {
              current.right = newNode
              loop = false;
              return;
            } else {
              queue.push(current.left)
              queue.push(current.right)
            }
      
          }
          if (!loop) {
            break;
          }
      
        }
        return true
      
      }
  }


  let tree = new Tree();
  tree.insert(1)
  tree.insert(2)
  tree.insert(3)
//   tree.insert(4)
//   tree.insert(5)
//   tree.insert(6)
//   tree.insert(7)
//   tree.insert(8)
//   tree.insert(9)
  console.log(JSON.parse(JSON.stringify(tree.root)));

  tree.InsertlevelOrder(4)
  tree.InsertlevelOrder(5)
  tree.InsertlevelOrder(6)
  tree.InsertlevelOrder(7)
  tree.InsertlevelOrder(8)
  console.log(JSON.parse(JSON.stringify(tree.root)));
