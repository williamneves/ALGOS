# ####################################################

# :graduation: ##SUPER## ALGO CHALLENGE DAY #21 @everyone

# THIS IS A REAL INTERVIEW QUESTION

# #Remove Duplicates From Linked List

# You're given the head of a Singly Linked List whose nodes are in sorted order with respect to their values. Write a function that returns a modified version of the Linked List that doesn't contain nodes with duplicate values.

# The Linked List should be modified in place (not to create another list). The modified Linked List should still have its nodes sorted with respect to their values.

# Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to None/null if it's the tail of the list.

# Sample input
# linkedList = 1 -> 1 -> 3 -> 4 -> 4 -> 4 -> 5 -> 6 -> 6


# Sample output
# linkedList = 1 -> 3 -> 4 -> 5 -> 6


# Hint 1
# The brute-force approach to this problem is to use a hash table or a set to keep track of all node values that exist while traversing the linked list and to simply remove nodes that have a value that already exists. This approach works, but can you solve this problem without using a auxiliary data structure?

# Hint 2
# What does the fact that nodes are sorted tell you about the location of all duplicate nodes? How can you use this fact to solve this problem with constant space?

# Hint 3
# Since the linked list's nodes are sorted, you can loop through then and, at each iteration, simply remove all successive nodes that have the same as the current node. For each node, change its next pointer to the next node, in the linked list that has a different value. This remove all duplicate-value nodes.

# If you want to know if your answer is right, please post in 100-days-answers

# This is an input class. Do not edit.
class LinkedList:
    def __init__(self, value):
        self.value = value
        self.next = None



def removeDuplicatesFromLinkedList(linkedList):
    # Write your code here.
    runner = linkedList;

    while runner != None:
        runner_next = runner.next
        while runner_next != None and runner.value == runner_next.value:
            runner_next = runner_next.next

        runner.next = runner_next
        runner = runner_next

    return linkedList
