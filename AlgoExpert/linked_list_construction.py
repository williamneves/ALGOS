# Write a DoublyLinkedList class that has a head and a tail, both of which point to either a linked list Node or None / null. The class should support:

# Setting the head and tail of the linked list.
# Inserting nodes before and after other nodes as well as at given positions (the position of the head node is 1).
# Removing given nodes and removing nodes with given values.
# Searching for nodes with given values.
# Note that the setHead, setTail, insertBefore, insertAfter, insertAtPosition, and remove methods all take in actual Nodes as input parameters—not integers (except for insertAtPosition, which also takes in an integer representing the position); this means that you don't need to create any new Nodes in these methods. The input nodes can be either stand-alone nodes or nodes that are already in the linked list. If they're nodes that are already in the linked list, the methods will effectively be moving the nodes within the linked list. You won't be told if the input nodes are already in the linked list, so your code will have to defensively handle this scenario.

# If you're doing this problem in an untyped language like Python or JavaScript, you may want to look at the various function signatures in a typed language like Java or TypeScript to get a better idea of what each input parameter is.

# Each Node has an integer value as well as a prev node and a next node, both of which can point to either another node or None / null.

# Sample Usage
# // Assume the following linked list has already been created:
# 1 <-> 2 <-> 3 <-> 4 <-> 5
# // Assume that we also have the following stand-alone nodes:
# 3, 3, 6
# setHead(4): 4 <-> 1 <-> 2 <-> 3 <-> 5 // set the existing node with value 4 as the head
# setTail(6): 4 <-> 1 <-> 2 <-> 3 <-> 5 <-> 6 // set the stand-alone node with value 6 as the tail
# insertBefore(6, 3): 4 <-> 1 <-> 2 <-> 5 <-> 3 <-> 6 // move the existing node with value 3 before the existing node with value 6
# insertAfter(6, 3): 4 <-> 1 <-> 2 <-> 5 <-> 3 <-> 6 <-> 3 // insert a stand-alone node with value 3 after the existing node with value 6
# insertAtPosition(1, 3): 3 <-> 4 <-> 1 <-> 2 <-> 5 <-> 3 <-> 6 <-> 3 // insert a stand-alone node with value 3 in position 1
# removeNodesWithValue(3): 4 <-> 1 <-> 2 <-> 5 <-> 6 // remove all nodes with value 3
# remove(2): 4 <-> 1 <-> 5 <-> 6 // remove the existing node with value 2
# containsNodeWithValue(5): true

# This is an input class. Do not edit.
class Node:
    def __init__(self, value):
        self.value = value
        self.prev = None
        self.next = None


# Feel free to add new properties and methods to the class.
class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def setHead(self, node):
        # Write your code here.
        
        # Covers the case where the head is None (Empty List)
        if self.head is None:
            self.head = node
            self.tail = node
            return self
        
        # Covers if the head is the same as the node to be set as the head
        if self.head == node:
            return self
        
        # Covers if the head is not the same as the node to be set as the head
            
        temp_head = self.head          # Save the old head
        self.head = node               # Set the new head
        temp_head.prev = self.head     # Set the new head's prev to the old head
        node.next = temp_head          # Set the new head's next to the old head
        node.prev = None               # Set the new head's prev to None
        
        return self

    def setTail(self, node):

        # Covers the case where the tail is None (Empty List)
        if self.tail is None:
            self.tail = node
            self.head = node
            return self
        
        # Covers if the tail is the same as the node to be set as the tail
        if self.tail == node:
            return self
        
        # Covers if the tail is not the same as the node to be set as the tail
        
        temp_tail = self.tail          # Save the old tail
        self.tail = node               # Set the new tail
        self.next = None               # Set the new tail's next to None
        self.tail.prev = temp_tail     # Set the new tail's prev to the old tail
        temp_tail.next = self.tail     # Set the old tail's next to the new tail
        
        return self
    
    
    def containsNodeWithValue(self, value):
        # Write your code here.
        if self.head is None:
            return False
        
        if self.head.value == value or self.tail.value == value:
            return True
        
        runner = self.head
        while runner != self.tail:
            if runner.value == value:
                return True
            runner = runner.next
            
        return False
    
    def containsNode(self, node):
        # Write your code here.
        if self.head is None:
            return False
        
        if self.head == node or self.tail == node:
            return True
        
        runner = self.head
        while runner != self.tail:
            if runner == node:
                return True
            runner = runner.next
            
        return False

    def insertBefore(self, node, nodeToInsert):
    
        # Covers the case where the node referenced by nodeToInsert is the head
        if self.head == node or self.head == None:
            self.setHead(nodeToInsert)
            return self
        
        # Move the nodeToInsert prev to point the next of the nodeToInsert
        if self.containsNode(nodeToInsert):
            nodeToInsert_prev = nodeToInsert.prev
            nodeToInsert_prev.next = nodeToInsert.next
        
        if self.containsNode(node):
            node_prev = node.prev
            node_prev.next = nodeToInsert
            nodeToInsert.prev = node_prev
            nodeToInsert.next = node
            node.prev = nodeToInsert
            
            return self
            
        else:
            
            return self

    def insertAfter(self, node, nodeToInsert):
        # Write your code here.
        # Covers the case where the node referenced by nodeToInsert is the head
        if self.tail == node or self.tail == None:
            self.setTail(nodeToInsert)
            return self
        
        if self.containsNode(nodeToInsert):
            nodeToInsert_prev = nodeToInsert.prev
            nodeToInsert_prev.next = nodeToInsert.next
        
        if self.containsNode(node):
            
            node_next = node.next
            node.next = nodeToInsert
            nodeToInsert.prev = node
            nodeToInsert.next = node_next
            node_next.prev = nodeToInsert
            
            return self
            
        else:
            
            return self

    def insertAtPosition(self, position, nodeToInsert):
        # Write your code here.
        if self.head is None:
            return self
        
        if position == 1:
            self.setHead(nodeToInsert)
            return self
        
        count = 1
        runner = self.head
        while count < position:
            
            count += 1
            runner = runner.next
            
        if runner == self.tail:
            self.setTail(nodeToInsert)
            return self
        
        self.insertBefore(runner, nodeToInsert)
        
        return self

    def removeNodesWithValue(self, value):
        # Write your code here.
        if self.head.value == value:
            self.head = self.head.next
            
        if self.tail.value == value:
            self.tail = self.tail.prev
            
        if self.containsNodeWithValue(value):
                
            runner = self.head
            while runner != self.tail:
                if runner.value == value:
                    runner.prev.next = runner.next
                    runner.next.prev = runner.prev
                    runner = runner.next
                else:
                    runner = runner.next
        return self

    def remove(self, node):
        # Write your code here.
        
        if self.head == node:
            self.head = self.head.next
            
        if self.tail == node:
            self.tail = self.tail.prev
            
        if self.containsNode(node):
            runner = self.head
            while runner != self.tail:
                if runner == node:
                    runner.prev.next = runner.next
                    runner.next.prev = runner.prev
                    runner = runner.next
                else:
                    runner = runner.next
        return self



node1 = Node(1)
node2 = Node(2)
node3 = Node(3)
node4 = Node(4)

newDLL = DoublyLinkedList()
newDLL.setHead(node1)
newDLL.setTail(node2)
newDLL.insertBefore(node2, node3)
newDLL.insertAfter(node3, node4)

print(newDLL.containsNodeWithValue(3))
print(newDLL.head.value)
print(newDLL.tail.value)
print(newDLL.head.next)
print(newDLL.tail.prev)