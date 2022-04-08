// Node class
class Node {
    constructor(val){
        this.value = val;
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
                arr.push(runner.value);
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
                sum += runner.value
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


    contains(val){
        if(this.isEmpty()){
            console.log("The list is empty");
            return false;
        } else{
            var runner = this.head;
            while (runner != null){
                if(runner.value == val){return true}
                runner = runner.next
            }
        }
        return false
    }


    containsRecursively(val, node=this.head){
        if(this.isEmpty()){
            console.log("The list is empty");
            return false;
        }
        if(node.value == val){return true}
        else if(node.next == null) {return false}
        else{
            node = node.next;
            return this.containsRecursively(val, node)
        }
    }

    // If you didn't already come up with the solution recursively, try that now! Or, if you did solve it recursively, how might you do it iteratively? 

    
    // Remove and return the last value in your list
    removeBack(){
        if(this.isEmpty()){
            console.log("The list is empty");
            return false;
        } else if(this.head.next == null) {
            let node = this.head;
            this.head = null;
            return node;
        } else{
            var runner = this.head;
            while (runner.next.next != null){
                runner = runner.next;
            }
            let node = runner.next;
            runner.next = null;
            return node;
        }
    }

    // Return (don't remove) the second to last value in your list (ex: if your list is 2, 5, 6, 3, 9, you should return 3)
    secondToLast(){
    // your code here
        var runner = this.head;

        while (runner.next.next != null){
        runner = runner.next;
        }
        return runner.value
        
    }

    removeVal(val){

        if(!this.contains(val)){
            return false;
        }
        var runner = this.head
        var runner_prev = this.head

        while (runner != null){
            if (runner.value == val){
                console.log("remove val", val)
                if (this.head.value == val){
                    self.removeHead()
                    return true
                }
                runner_prev.next = runner.next
                return true
            }
            runner_prev = runner
            runner = runner.next
        }
    }

    removeAllVal(val){
        // Case val is not in SLL
        if(!this.contains(val)){
            return false;
        }

        // While SLL ends
        var runner = this.head
        while (runner != null){
            // Recursive 
            if (runner.value == val){
                this.removeVal(val);
            }
            runner = runner.next
        }
        return true
    }

    concat(addList){
        // your code here
        // this.tail.next = addList.head
        if (this.head == null && addList.head == null){
            console.log("Both lists are empty")
            return false
        }

        if (this.head != null && addList.head == null){
            console.log("The addList is empty")
            return false
        }

        if (this.head == null && addList.head != null){
            this.head = addList.head
            return true
        }

        var runner = this.head
        while (runner.next != null){
            runner = runner.next
        }
        runner.next = addList.head

        return true

    }

    // Find the smallest value in your list and move it to the front (ex: if your list looked like this: 4, 8, 2, 5, then after the function it should look like this: 2, 4, 8, 5)
    moveMinToFront(){
        // your code here
        if(this.isEmpty()){
            console.log("Empty lst");
            return false
        }
        // Finding the min val
        var runner = this.head
        var minVal = this.head
        while (runner.next != null){
            if (runner.value < minVal.value){
                minVal = runner
            }
            runner = runner.next
        }

        // Move min val to front
        if (minVal == this.head){
            console.log("Min val is already the head")
            return true
        }
        var runner = this.head
        while (runner.next != minVal){
            runner = runner.next
        }
        // Add min to front
        runner.next = minVal.next
        minVal.next = this.head
        this.head = minVal

        return true
    }

    // EXTRA: Given a value, split your list into two lists along that value. Ex: if your original list was 1, 2, 3, 4, 5 and you were given 3, your first list should have 1, 2 and your second list should have 3, 4, 5
    splitOnVal(val){
        // your code here
        var newSLL = new SLL();
        if(!this.contains(val)){
            return this;
        }
        var runner = this.head
        var newListHead = this.head
        while (runner.next != val){
            runner = runner.next
        }
        newListHead = runner.next

        runner.next = null
        newSLL.head = newListHead

        var list_SLLs = [this, newListHead]


        return list_SLLs
        
    }

}

var mySll = new SLL();
// mySll.toArray();
// console.log(mySll.isEmpty());
mySll.insertAtBack(5);
mySll.insertAtBack(8);
mySll.insertAtBack(4);
mySll.insertAtBack(4);
mySll.insertAtBack(4);
mySll.insertAtBack(4);
mySll.insertAtBack(9);
mySll.insertAtBack(1);
mySll.insertAtBack(3);
mySll.insertAtBack(3);
mySll.insertAtBack(3);
mySll.insertAtBack(3);

// mySll.toPrint();
mySll.removeHead()
// mySll.toPrint();
mySll.InsertAtFront(55)
mySll.toPrint();
// console.log(mySll.sumAll())
// console.log(mySll.average())
console.log(mySll.secondToLast())
console.log("return: ",mySll.removeVal(4),"\n")
console.log("return: ",mySll.removeVal(3),"\n")
console.log("return: ",mySll.removeAllVal(4),"\n")
console.log("return: ",mySll.removeAllVal(3),"\n")
// mySll.removeVal(3)
mySll.toPrint();

var sll2 = new SLL();
sll2.insertAtBack(8);
sll2.insertAtBack(4);
sll2.insertAtBack(4);
sll2.toPrint();
mySll.concat(sll2)
mySll.toPrint();
mySll.moveMinToFront();
mySll.toPrint();
console.log(mySll.splitOnVal(1))