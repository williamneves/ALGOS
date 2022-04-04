class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class SLList {
    constructor() {
        this.head = null
    }

    addToFront(value) {
        var newNode = new Node(value)
        if (this.head == null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode
        }
        return this
    }

    // given a value, add it to the back of your singly linked list
    // what if the list is empty?
    addToBack(value) {
        if (this.head == null) {
            this.addToFront(value);
            console.log("hello")
            return this
        } else {
            var newNode = new Node(value)
            console.log("hello1")
            var findNext = this.head;
            while (findNext.next != null) {
                findNext = findNext.next
            }
            findNext.next = newNode
            console.log(findNext.next)
        }

        return this
    }

    // print the singly linked list
    printValues() {
        // step #0 [EDGE CASE]) handle a case where there is nothing in the list
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
            console.log(`The current value is: ${runner.value}`)
            runner = runner.next
        }
        console.log("We have hit the end of the list!")
        // return 'this' to end function and allow chaining of methods
        return this
    }
}

const sll = new SLList();
sll.addToFront(-3)
sll.addToFront(-122)
sll.addToFront(41)
sll.addToBack(48)
sll.addToBack(-5)
sll.printValues()