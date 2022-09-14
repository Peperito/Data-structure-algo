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

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')
a.left = b
a.right = c
b.left = d
b.right = e
c.right = f


/* iterative version:
const depthFirstValues = (root) => {
    //guard against null input
    if(root == null) return [];

    const result = [];
    const stack = [root];

    while(stack.length > 0){
        const current = stack.pop();
        result.push(current.data);

        //This will favor the left branch first, on top on the stack(array here)
        if(current.right) stack.push(current.right);
        if(current.left) stack.push(current.left); 
    }
    return result;
} */


//Recursive version:
const depthFirstValues = (root) => {
    //guard against null input
    if(root == null) return [];
    const leftValues = depthFirstValues(root.left); // full array of values for the left subtree
    const rightValues = depthFirstValues(root.right); // full array of values for the right subtree

    // The callstack behavior allows 

    return [root.data, ...leftValues, ...rightValues];
}




console.log(depthFirstValues(a));