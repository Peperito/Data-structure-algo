const LinkedList = require('./linkedList');

class Stack { 
    
    constructor(capacity = Infinity){
        this.stack = new LinkedList();
        this.capacity = capacity;
        this.size = 0;
    }

    isEmpty(){
       return this.size === 0;
    }

    hasRoom() {
        return this.size < this.capacity;
    }
    
    push(data){
        if( !this.hasRoom()){
            throw new Error('Stack overFLow')
        } 
        this.stack.addToHead(data);
        this.size++;
    }

    pop(){
        if(this.isEmpty()){
            throw new Error('Stack undeflow')
        }
        this.stack.removeHead();
        this.size--;
    }

    peek(){
        return this.stack.head.data;
    }
    

}

module.exports = Stack;

const testStack = new Stack(5);

testStack.push(1);
testStack.push(2);
testStack.push(3);
testStack.push(4);
testStack.push(4);

console.log(testStack.size);

for(let i=0; i < testStack.size; i++){
    if(testStack.peek() == 4){
        testStack.pop();
    };
}

console.log(testStack.size);

testStack.stack.printList();






