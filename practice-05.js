// Create _private Node class
class _Node {
    constructor(value, next) {
        // binding
        this.value = value;
        this.next = next;
    }
}

// Create a Linked List class
// with some common crud methods for insertion, retrieval, and deletion
class LinkedList {
    constructor() {
        this.head = null;
    }

    // insertion //////////////
    insertFirst(data) {
        this.head = new _Node(data, this.head);
    }

    insertLast(data) {
        if (!this.head) {
            this.insertFirst(data);
        }

        let currNode = this.head;
        
        while (currNode.next) {
            // continue traversing through LL
            currNode = currNode.next;
        }
        // else, insert data at the end of LL
        currNode.next = new _Node(data, null);
    }

    // retrieval //////////////
    find(data) {
        if (!this.head) return null;

        let currNode = this.head;

        while (currNode.value !== data) {
            if(currNode.next === null) {
                return null;
            }
            else {
                // keep traversing
                currNode = currNode.next;
            }
        }
        // Found it!
        return currNode;
    }

    // deletion //////////////
    remove(data){
        if (!this.head) return null;

        // if node to be removed is in the initial node/head
        if (this.head.value === data) {
            this.head = this.head.next;
            return;
        }

        // else start travering at the head
        let currNode = this.head;
        let prevNode = this.head;

        while(currNode.value !== data) {
            if (currNode !== null) {
                prevNode = currNode;
                currNode = currNode.next;
            }
            else {
                console.log('data not found');
                return null;
            }
        }
        // Found the node
        // Rewire pointers so currNode is removed
        // (to be deleted later by garabage collection)
        prevNode.next = currNode.next;
    }


}

// helper functions
const linkedListHelper = {

    display: function(list) {
        if(!list.head) return null;

        let currNode = list.head;
        // while (currNode) {
        //     console.log(currNode.value);
        //     currNode = currNode.next;
        // }
        let listStr = [currNode.value];
        while (currNode.next) {
            currNode = currNode.next;
            listStr.push(currNode.value);
        }
        console.log('/////////// \n' + listStr.join(' '));
    },

    removeDupes: function(list) {
        let currNode = list.head;

        // O(n^2) Polynomial Time Complexity
        // while (currNode) {
        //     while (currNode.next) {
        //         if (currNode.next.value === currNode.value) {
        //             currNode.next = currNode.next.next;
        //         }
        //         else {
        //             currNode = currNode.next;
        //         }
        //     }
        //     currNode = currNode.next;
        // }

        // O(n) Linear Time Complexity
        while (currNode.next) {
            if (currNode.value === currNode.next.value) {
                currNode.next = currNode.next.next;
            }
            else {
                currNode = currNode.next;
            }
        }

        // BUT doesn't work properly if list is unsorted.
        // Solution for that scenario ==> create a Hash Table.
        // Would have a runtime of O(n), assuming has table insertion is O(1) due to no collisions.
    }
};


// TEST DATA
let SLL = new LinkedList();

const testData = [1, 2, 3, 2, 2, 4, 5, 5 ];

testData.forEach(item => {
    SLL.insertLast(item);
});

linkedListHelper.display(SLL);
linkedListHelper.removeDupes(SLL);
linkedListHelper.display(SLL);