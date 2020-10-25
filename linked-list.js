class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertBefore(value, item) {
        if (!this.head) return null;
        // If the loopup value is the first item in the list
        if (this.head.value === value) {
            this.insertFirst(item);
            return;
        }

        // Start at the head 
        // and keep track of the previous node
        let currentNode = this.head;
        let previousNode = currentNode;

        // Traverse through the linked list of values
        while (currentNode.value !== value) {
            if (!currentNode.next) return null;
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        // Insert new node item, with next pointing to current node value
        // and rewire previous node next to point to the new previous node instead of current node
        previousNode.next = new _Node(item, currentNode);
    }
 
    insertAfter(value, item) {
        if(!this.head) return null;
    
        if(this.head.value === value) {
            this.head.next = new _Node(item, null);
            return;
        }
    
        // Start at the head
        let currentNode = this.head
    
        // Traverse through the linked list of values
        while (currentNode.value !== value) {
            if (!currentNode.next) return null;
            currentNode = currentNode.next
        }
    
        // Insert new node after current node first
        // set next pointer of new node to next node
        // then set next pointer of current node to new node
        currentNode.next = new _Node(item, currentNode.next);
    
    }

    
}




module.exports = {
    _Node,
    LinkedList,

}