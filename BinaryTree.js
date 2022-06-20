
class BinarySearchTree {
    constructor() {
        this.Node = class {
            constructor(key) {
                this.key = key;
                this.left = null;
                this.right = null;
            }
        };
        this.root = null;
    }

    insert(key) {
        const newNode = new this.Node(key);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
                return;
            }
            this.insertNode(node.left, newNode);
        } else {
            if (node.right === null) {
                node.right = newNode;
                return;
            }
            this.insertNode(node.right, newNode);
        }
    }

    min() {
        return this.minNode(this.root);
    }
    minNode(node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node.key;
        }
        return null;
    }

    max() {
        return this.maxNode(this.root);
    }
    maxNode(node) {
        if (node) {
            while (node && node.right !== null) {
                node = node.right;
            }
            return node.key;
        }
        return null;
    }

    search(key) {
        return this.searchNode(this.root, key);
    }
    searchNode(node, key) {

        if (node === null) {
            return false;
        }
        if (key === node.key) return node
        if (key < node.key) {
            return this.searchNode(node.left, key);
        } else if (key > node.key) {
            return this.searchNode(node.right, key);
        }
        return true;
    }

    remove(key) {
        this.root = this.removeNode(this.root, key);
    }
    findMinNode(node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node;
        }
        return null;
    }
    removeNode(node, key) {
        if (node === null) {
            return null;
        }
        if (key < node.key) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {

            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            if (node.left === null) {
                node = node.right;
                return node;
            }

            if (node.right === null) {
                node = node.left;
                return node;
            }

            const aux = this.findMinNode(node.right);
            node.key = aux.key;
            node.right = this.removeNode(node.right, aux.key);
            return node;
        }
    }
    levelOrderTraversal(node) {
        this.queue.push(node);
        let levelOrder = '';
        while (this.queue.length > 0) {
            let first = this.queue.shift();
            if (+first.key !== -1) {
                levelOrder += first.key + ' ';
            }
            if (first.left !== null)
                this.queue.push(first.left);
            if (first.right !== null)
                this.queue.push(first.right);
        }
        return levelOrder;
    }
    levelOrderAverage(node) {
        this.queue.push(node);
        while (this.queue.length > 0) {
            let sum = 0, count = 0;
            let temp = [];
            while (this.queue.length > 0) {
                let first = this.queue.shift();
                if (+first.key !== -1) {
                    sum += +first.key;
                    count++;
                }
                if (first.left !== null) {
                    temp.push(first.left);
                }
                if (first.right !== null) {
                    temp.push(first.right);
                }
            }
            this.queue = temp;
            let avg = sum / count;
            console.log(avg.toFixed(2));
        }
    }
    levelOrder(root) {
        if (!root) return [];

        const result = [];
        const queue = [root];

        while (queue.length) {
            const levelValues = [];
            const length = queue.length;

            for (let i = 0; i < length; i++) {
                const current = queue.shift();
                levelValues.push(current.key);

                if (current.left) queue.push(current.left);
                if (current.right) queue.push(current.right);
            }

            result.push(levelValues);
        }

        return result;
    }
    preOrderUnRecursive(tree) {
        const result = [];
        const queue = [];
        if (tree !== undefined) {
            while (queue.length || tree) {
                if (tree) {
                    result.push(tree.key);
                    queue.push(tree);
                    tree = tree.left;
                }
                else {
                    tree = queue.pop();
                    tree = tree.right;
                }
            }
        }
        return result;
    }
    inOrderUnRecursive(tree) {
        var result = [];
        var queue = [];
        if (tree !== undefined) {
            while (queue.length || tree) {
                if (tree) {
                    queue.push(tree);
                    tree = tree.left;
                }
                else {
                    tree = queue.pop();
                    result.push(tree.key);
                    tree = tree.right;
                }
            }
        }
        return result;
    }
    postOrderUnRecursive(tree) {
        const result = [];
        const queue = [];
        var item;
        if (tree !== undefined) {
            queue.push(tree);
            while (queue.length) {
                item = queue[queue.length - 1];
                if (item.left && tree !== item.left && tree !== item.right) {
                    queue.push(item.left);
                }
                else if (item.right && tree !== item.right) {
                    queue.push(item.right);
                }
                else {
                    result.push(queue.pop().key);
                    tree = item;
                }
            }
        }
        return result;
    }
    treeSize(node) {
        if (node === null)
            return 0;

        let leftNode = this.treeSize(node.left);
        let rightNode = this.treeSize(node.right);
        return leftNode + rightNode + 1;
    }
    treeHeight(node) {
        if (node === null)
            return -1;

        let leftHeight = this.treeHeight(node.left);
        let rightHeight = this.treeHeight(node.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }
    
    depth() {
        return this._depthTree(this.root);
    }

    _depthTree(node) {

        if (node === null)
            return 0;

        let leftDepth = this._depthTree(node.left);
        let rightDepth = this._depthTree(node.right);


        if (leftDepth > rightDepth)
            return (leftDepth + 1);
        else
            return (rightDepth + 1);
    }

}
let nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13];

let tree1 = new BinarySearchTree();
nodes.forEach(key => tree1.insert(key));
// console.log(tree1.root);

console.log(tree1.search(1))

let position = tree1.search(1);
if (position) {
    const newNode = new tree1.Node(99);
    tree1.insertNode(position, newNode)
}
console.log(tree1.levelOrder(tree1.root));
