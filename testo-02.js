// Nov 25
// building upon the walk-thru (testo-01.js)
// now redoing the assignment (adding additonal methods and helpers)
// src: https://courses.thinkful.com/dsa-v1/checkpoint/5#assignment

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
    // thinkful uses param name 'item' (paired with 'value' when two)
    // marius uses param name 'value' (paired with 'newValue' when two)
    // juan uses param name 'data' (paired with '??')


    // INSERTION /////////////////////////////////////////////
    // Three cases:
    // insert at the beginning of the list (insertFirst).
    // insert at the end of the list (insertLast).
    // insert anywhere else, between 2 nodes (insert, insertAt).

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let currNode = this.head;
            while (currNode.next !== null) {
                currNode = currNode.next;
            }
            currNode.next = new _Node(item, null);
        }
    }

    // TESTO-02 Extra Insertions ///////////////////

    insertBefore(value, item) {
        if (!this.head) return null;
        // if lookup value is the first item in the list
        if (this.head.value === value) {
            this.insertFirst(item);
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
        // Insert new node item before current node, connecting it to next pointer
        // and then rewire previous node next pointer to point at the nexw node
        prevNode.next = new _Node(item, currNode);
    }

    insertAfter(value, item) {
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
        currNode.next = new _Node(item, currNode.next);
    }

    insertAt(index, item) {
        if (index === 0) {
            return this.head = new _Node(item, this.head);
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
        prevNode.next = new _Node(item, currNode);
    }


    
    // RETREVIAL /////////////////////////////////////////////

    find(item) {
        // if the list is empty
        if (!this.head) {
            return null;
        }
        // start at the head
        let currNode = this.head;
        // check for the item
        while (currNode.value !== item) {
            /* Retrun null if it's the end of the list
               and the item is not on the list */
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

    remove(item) {
        // If list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is the initial head,
        // make the next node the head
        // removing the current node
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Else,
        // Start at the head
        let currNode = this.head;
        // Keep track of the previous node
        let prevNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // save the previous node, before move on to next node
            prevNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        // Found the item to remove (currNode)!!
        // So to actually remove it (not delete it, per se),
        // set the previous node next pointer to point to the node after the current node
        // removing the current node because nothing is pointing to it
        // (it will eventually be properly deleted via RAM 'garbage collection')
        prevNode.next = currNode.next;
        
    }
}


// SUPPLEMENTAL FUNCTIONS FOR A LINKED LIST ////////////////////
// Note: these are free functions instead of methods of the linked list class, so implement them *outside* the linked list class. (This appears to be a matter of preference, tho)
const linkedListHelper = {
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
    size: function(list) {
        let counter = 0;
        let currNode = list.head;
        while (currNode) {
            counter++;
            currNode = currNode.next;
        }
        console.log('list size: ', counter);
        return counter;
    }
}


// if not executing test data *within* this file
module.exports = {
    _Node,
    LinkedList,
    linkedListHelper,
};

// TEST DATA WITHIN /////////////////////////////////////////

// create a new instance of a singly linked list object
let SLL = new LinkedList();

// task 1
SLL.insertLast('Apollo');
SLL.insertLast('Boomer');
SLL.insertLast('Helo');
SLL.insertLast('Husker');
SLL.insertLast('Starbuck');
SLL.insertLast('Tauhida');

linkedListHelper.display(SLL);
linkedListHelper.size(SLL);

SLL.remove('Husker');

linkedListHelper.display(SLL);
linkedListHelper.size(SLL);

SLL.insertBefore('Boomer', 'Athena');
SLL.insertAfter('Helo', 'Hotdog');

linkedListHelper.display(SLL);
linkedListHelper.size(SLL);

SLL.insertAt(2, 'Kat');

linkedListHelper.display(SLL);
linkedListHelper.size(SLL);