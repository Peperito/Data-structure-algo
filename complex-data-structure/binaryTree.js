class Node {

    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    
    setLeftNode(node) {
        if (node instanceof Node || node === null) {
            this.left = node;
        } else {
            throw new Error('Left node must be a member of the Node class')
        }
    }
    
    setRightNode(node) {
        if (node instanceof Node || node === null) {
            this.right = node;
            } else {
            throw new Error('Right node must be a member of the Node class')
        }
    }
    
    getLeftNode() {
        return this.left;
    }
    
    getRightNode() {
        return this.right;
    }

}


module.exports = Node;