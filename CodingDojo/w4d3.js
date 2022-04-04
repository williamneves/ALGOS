class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLList {
    constructor() {
        this.head = null;
    }

    addToFront(value) {
        var newNode = new Node(value)
        if (this.head == null) {
            this.head = newNode;
            return this
        }
        newNode.next = this.head;
        this.head = newNode
        return this
    }
    
    addToBack(value) {
        var newNode = new Node(value)
    
        if (this.head == null) {
            this.head = newNode
            return this
        }
    
        var runner = this.head
    
        while (runner.next != null) {
            runner = runner.next
        }
        runner.next = newNode
        return this
    }
    
    removeFromFront() {
        if (this.head == null) {
            return this
        }
        // if (this.head.next == null) {
        //     this.head = null;
        //     return this
        // }
        let temp = this.head; 
        this.head = this.head.next; 
        temp.next = null; 
        return this
    }

    removeFromBack() {
        if (this.head == null) {
            return this
        }
        var runner = this.head;
        while (runner.next.next != null){
            runner = runner.next;
        }
        runner.next = null; 
        return this
    }    

    containsValue(value) {
        var contains = false; 
        if (this.head == null) {
            console.log("List Empty!")
            return this
        }  
        var runner = this.head;     
        while (runner != null){
            if (runner.value == value) {
                contains = true;
                break
            }
            runner = runner.next; 
        }
        if (contains == true) {
            console.log("Value found!");
        }
        else {
            console.log("BOOO!");
        }
        return this
    }

    // print the singly linked list
    printValues() {
        // step #0 [EDGE CASE]) handle a case where there is nothing in the list
        let values = ""
        if(this.head == null){
            console.log("There's nothing in the list! Dummy!")
            // return 'this' to end function and allow chaining of methods
            return this
        }
        //step #1) establish a runner to traverse through the list
        var runner = this.head;

        // NOTE: we can move runner all the way into null because our loop will exit as soon as runner hits null, avoiding any errors with printing
        while(runner != null) {
            // step #2) print the values at each iteration before moving the runner!
            //console.log(`The current value is: ${runner.value}`)
            values+=`${runner.value}-`
            runner = runner.next
        }
        console.log(values)
        // return 'this' to end function and allow chaining of methods
        return this
    }
    minToFront() {
        if (this.head == null) {
            return this
        }
        let runner = this.head
        let temp = runner.value
        while (runner.next != null) {
            if (temp > runner.next.value) {
                temp = runner.next.value
            }
            runner = runner.next
        }
        runner = this.head
        while (runner.next.value != temp) {
            runner = runner.next
        }
        let temp2 = runner.next
        temp2 = null
        runner.next = runner.next.next
        this.addToFront(temp)
        return this
    }
    maxToBack() {
        if (this.head == null) {
            return this
        }
        let runner = this.head
        let temp = runner.value
        while (runner.next != null) {
            if (temp < runner.next.value) {
                temp = runner.next.value
            }
            runner = runner.next
        }
        runner = this.head
        while (runner.next.value != temp) {
            runner = runner.next
        }
        let temp2 = runner.next
        temp2 = null
        runner.next = runner.next.next
        this.addToBack(temp)
        return this
    }
}

const sll = new SLList();
sll.addToFront(3)
sll.addToFront(122)
sll.addToFront(41)
sll.addToBack(48)
sll.addToBack(5)
sll.printValues()
//sll.removeFromFront().removeFromBack().printValues()
sll.containsValue(0)

sll.printValues()
sll.minToFront()
sll.maxToBack()
sll.printValues()