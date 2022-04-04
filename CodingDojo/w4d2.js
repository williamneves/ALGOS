// construct a Singly Linked List Class

class Node {
    constructor(value){ //def __init__()
        this.value = value
        this.next = null
    }
}
class SLList{
    constructor(){
        this.head = null //On creation of empty list we set .head to null
    }
    inspect(depth, opts) {
        this.print();
    };

    addToFront(value) {
        if(this.head === null) this.head = new Node(value) // sets head to a new node if no head node
        else{
            let newNode = new Node(value)
            newNode.next = this.head
            this.head = newNode
        }
        return this
    }
    
    addToBack(value) {
        let currentNode = this.head
        while(currentNode.next != null){
            currentNode = currentNode.next;
        }
        currentNode.next = new Node(value);
        return this
    }

    removeFromFront(){
        let newHead = this.head.next
        this.head = newHead
        return this
    }

    removeFromBack(){
        let currentNode = this.head
        let prevNode = null
        while(currentNode.next != null){
            prevNode = currentNode
            currentNode = currentNode.next;
        }
        prevNode.next = null
        return this
    }

    insertMiddle(value){
        let currentNode = this.head
        let counter = 1
        let temp = null
        let newNode = new Node(value)
        while(currentNode.next != null){
            currentNode = currentNode.next
            counter ++
        }
        console.log("Count: ",counter, "Current Node Value: ",currentNode.value);
        counter = Math.trunc(counter / 2)
        console.log("Mid Point: ",counter);
        currentNode = this.head
        while(counter > 1){
            currentNode = currentNode.next
            counter--
        }
        console.log(currentNode.value)
        
        temp = currentNode.next
        currentNode.next = newNode
        newNode.next = temp

        return this
        
    }

    contains(value){
        let currentNode = this.head
        while(currentNode != null){
            if(currentNode.value === value) return true
            currentNode = currentNode.next
        }
        return false
    }

    printList(){
        let currentNode = this.head
        while(currentNode != null){
            console.log(currentNode.value);
            currentNode = currentNode.next
        }
        return this
    }

    nodesToList(){
        let newArr = [];
        let currentNode = this.head;
        while(currentNode != null){
            newArr.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(newArr);
        return this
    }
    
    print(){
        let result = "";
        let runner = this.head;
        while(runner != null){
            result += `👉 ${runner.value} ⇶ `; 
            runner = runner.next;
        }
        console.log(result.slice(0, result.length - 4));
    }
}

ls = new SLList()
ls.addToFront(10).addToFront(9).addToFront(8).addToFront(7).addToFront(6).addToFront(5)


// ls.printList()

ls.addToBack(22)

// ls.nodesToList();
ls.print()
ls.insertMiddle(682);
ls.print()
ls.removeFromBack().removeFromFront()
ls.print()
console.log(ls.contains(8))