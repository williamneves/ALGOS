// Node class
class Node {
    constructor(val){
        this.data = val;
        this.next = null;
    }
}

// Singly Linked List class
class SLL {
    constructor(){
        this.head = null;
        this.sll_length = 0
    }

    // This is where all of our methods are going to live
    // How do we know if the list is empty or not?
    isEmpty(){
        // If this.head is equal to null it will return true, if it is not equal to null it will return false
        return this.head == null;
    }
    // How do we see the values in a singly linked list?
    // Send all my values to an array and print those values out
    toPrint(){
        if(this.isEmpty()){
            console.log("Nothing to print");
        } else {
            var arr = [];
            var runner = this.head;
            while(runner){
                arr.push(runner.data);
                runner = runner.next;
            }
            console.log(arr);
        }

        return this
    }
    
    
    //Insert a node at the front of the list
    InsertAtFront(val){
        if (!this.isEmpty()){
            var temp = this.head
        var newNode = new Node(val)
        newNode.next = temp.next
        this.head = newNode
        }
        else{
            var newNode = new Node(val)
            this.head = newNode
        }
        this.sll_length++
        return this
    }
    // Add a node to the list
    // The first value MUST be the head
    insertAtBack(val){
        // Step one: check if the list is empty
        if(this.isEmpty()){
            // This statement triggers if there is nothing at the head
            this.head = new Node(val);
        } else {
            // there is something already at head and we need to add to the back of the list
            // I need to go through my list until the .next points to null
            var runner = this.head;
            // Since we don't know how long we'll run, we need a while loop
            while(runner.next != null){
                // while there is still a node to move down to
                runner = runner.next; // this will move me one node down the list
            }
            // We end on the last node
            runner.next = new Node(val);
        }
        this.sll_length++

        return this
    }

    // Remove and return the head node from your list (remember this means we need a new head)
    removeHead(){
        if (this.isEmpty()){
            console.log('Empty list')
        }
        else{
            var temp = this.head
            this.head = this.head.next
            this.sll_length--
        }
        return temp.val
    }

    sumAll(){
        if (!this.isEmpty()){
            var runner = this.head
            var sum = 0
            while(runner!=null){
                sum += runner.data
                runner = runner.next
            }
            return sum
        }
        else {
            return 0
        }
    }
    average(sum=this.sumAll(),total=this.sll_length){
        if (!this.isEmpty()){
            return sum / total
        }
        else{
            return 0
        }
    }
}

var mySll = new SLL();
// mySll.toArray();
// console.log(mySll.isEmpty());
mySll.insertAtBack(3);
mySll.insertAtBack(5);
mySll.insertAtBack(8);
mySll.insertAtBack(4);
mySll.insertAtBack(9);
mySll.insertAtBack(1);

mySll.toPrint();
mySll.removeHead()
mySll.toPrint();
mySll.InsertAtFront(55)
mySll.toPrint();
console.log(mySll.sumAll())
console.log(mySll.average())


var sll2 = new SLL();