// Nov 26
// building upon testo-02.js

// The primary operations in a linked list are insert, remove, and retrieval (find).

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


    // ASIDE: PARAM SEMANTICS /////////////////////////
    // thinkful uses param name 'item' (paired with 'value' when comparing two)
    // marius uses param name 'value' (paired with 'newValue')
    // juan uses param name 'data' (paired with 'value')


    // INSERTION /////////////////////////////////////////////
    // Three cases:
    // insert at the beginning of the list (insertFirst).
    // insert at the end of the list (insertLast).
    // insert anywhere else, between 2 nodes (insert, insertAt).

    insertFirst(data) {
        this.head = new _Node(data, this.head);
    }

    insertLast(data) {
        if (this.head === null) {
            this.insertFirst(data);
        }
        else {
            let currNode = this.head;
            while (currNode.next !== null) {
                currNode = currNode.next;
            }
            currNode.next = new _Node(data, null);
        }
    }

    // TESTO-02 Extra Insertions ///////////////////

    insertBefore(value, data) {
        if (!this.head) return null;
        // if lookup value is the first data in the list
        if (this.head.value === value) {
            this.insertFirst(data);
            return;
        }

        // Start at the head
        let currNode = this.head;
        let prevNode = this.head;

        while (currNode.value !== value) {
            if (!currNode.next) {
                // it ain't in the list
                return null;
            }
            // keep traversing through the list
            prevNode = currNode;
            currNode = currNode.next;
        }
        // Found node with the value
        // Insert new node data before current node, connecting it to next pointer
        // and then rewire previous node next pointer to point at the nexw node
        prevNode.next = new _Node(data, currNode);
    }

    insertAfter(value, data) {
        if (!this.head) return null;

        let currNode = this.head;

        // traversing the list
        while (currNode.value !== value) {
            if (!currNode.next) {
                return null;
            }
            // keep traversing
            currNode = currNode.next;
        }
        // the current node points to new node
        // while the new node points the next node
        currNode.next = new _Node(data, currNode.next);
    }

    insertAt(index, data) {
        if (index === 0) {
            return this.head = new _Node(data, this.head);
        }

        // need to create a counter because
        // linked lists don't have index numbers like an array
        let counter = 1;

        let currNode = this.head.next; // WHY NOT this.head ????
        let prevNode = this.head;

        while (counter !== index) {
            prevNode = currNode;
            currNode = currNode.next;
            counter++;
        }
        prevNode.next = new _Node(data, currNode);
    }


    
    // RETREVIAL /////////////////////////////////////////////

    find(data) {
        // if the list is empty
        if (!this.head) {
            return null;
        }
        // start at the head
        let currNode = this.head;
        // check for the data
        while (currNode.value !== data) {
            /* Retrun null if it's the end of the list
               and the data is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // keep looking/traversing
                currNode = currNode.next;
            }
        }
        // Found it!
        return currNode;
    }


    // REMOVAL /////////////////////////////////////////////
    // Three cases:
    // delete from the beginning of the list
    // delete from the end of the list
    // delete a node between two other nodes.

    remove(data) {
        // If list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is the initial head,
        // make the next node the head
        // removing the current node
        if (this.head.value === data) {
            this.head = this.head.next;
            return;
        }
        // Else,
        // Start at the head
        let currNode = this.head;
        // Keep track of the previous node
        let prevNode = this.head;

        while ((currNode !== null) && (currNode.value !== data)) {
            // save the previous node, before move on to next node
            prevNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('data not found');
            return;
        }
        // Found the data to remove (currNode)!!
        // So to actually remove it (not delete it, per se),
        // set the previous node next pointer to point to the node after the current node
        // removing the current node because nothing is pointing to it
        // (it will eventually be properly deleted via RAM 'garbage collection')
        prevNode.next = currNode.next;
        
    }
}




// TASKS /////////////////////////////////////////

// TASK 1
// Write an alorithm to delete all duplicates form a sorted linked list.

// create a new instance of a singly linked list object
let SLL = new LinkedList();

// let initList = [1, 2, 2, 2, 3, 5, 5, 5, 5, 7, 8, 9, 12, 12, 15];
let initList = [];

// populate linked list
initList.forEach(item => {
    SLL.insertLast(item);
});


// create a supplemental function/algorithm for linked list
// 1. remove duplicates
// 2. display output in console.log, if time allows

const linkedListHelper = {
    removeDupesThinkful: function(list) {
        let current = list.head;

        while (current !== null) {
            let newNode = current;
            
            while (newNode.next !== null) {
                if (newNode.next.value === current.value) {
                    newNode.next = newNode.next.next;
                }
                else {
                    newNode = newNode.next;
                }
            }
            current = current.next;
        }
    },
    removeDupesNathaniel: function(list) {
        let currNode = list.head;
        while (currNode.next !== null) {
            while (currNode.value === currNode.next.value) {
                currNode.next = currNode.next.next;
            }
            currNode = currNode.next;
        }
    },
    removeDupes: function(list) {
        if (!list.head) return null;
        
        let currNode = list.head;
        while (currNode.next) {
            while (currNode.value === currNode.next.value) {
                currNode.next = currNode.next.next;
            }
            currNode = currNode.next;
        }
    },
    display: function(list) {
        if (!list.head) {
            console.log('Empty list');
            return null;
        }

        let currNode = list.head;

        // Display v1: to display list vertically
        // while (currNode) {
        //     console.log(currNode.value);
        //     currNode = currNode.next;
        // }

        // Display v2: to display list horizonally inline
        let listStr = [currNode.value]; 
        while (currNode.next !== null) {
            currNode = currNode.next;
            listStr.push(currNode.value);
        }
        console.log('//////// \n' + listStr.join(' '));

    },
};

// console.log(SLL);
// console.log(JSON.stringify(SLL, null, 4));

linkedListHelper.display(SLL);

// linkedListHelper.removeDupesNathaniel(SLL);
// linkedListHelper.removeDupesThinkful(SLL);
linkedListHelper.removeDupes(SLL);
linkedListHelper.display(SLL);
