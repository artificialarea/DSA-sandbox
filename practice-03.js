
// Generic (private) Node class
class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

// Create linked list with primary operations of insert, retrieval, and remove.

class LinkedList {
    constructor() {
        this.head = null;
    }

    // insertions //////////////

    insertFirst(data) {
        this.head = new _Node(data, this.head);
    }

    insertLast(data) {
        if (!this.head) {
            // LL empty, ergo
            this.insertFirst(data);
        }
        else {
            // traverse through LL
            let currNode = this.head;

            while (currNode.next) {
                currNode = currNode.next;
            }
            // else, insert data at end of LL
            currNode.next = new _Node(data, null);
        }
    }

    // retrieval ///////////////

    find (data) {
        if (!this.head) return null;

        let currNode = this.head;
        while (currNode.value !== data) {
            if (currNode.next === null) {
                // reached end of list and nuthin', ergo
                return null;
            }
            else {
                // keep traversing through the LL
                currNode = currNode.next;
            }
        }
        // Found it!
        return currNode;

    }

    // remove //////////////////

    remove(data) {
        if (!this.head) return null;

        // if node to be removed is the initial head
        if (this.head.value === data) {
            this.head = this.head.next;
            return;
        }

        // else start at the head
        let currNode = this.head;
        let prevNode = this.head;
        // ^^ need to keep track of previous node
        // so when find current node to delete
        // can remove current node be rewiring the previous node to current.next node

        while(currNode.value !== data) {
            if (currNode !== null) {
                // keep traversing
                prevNode = currNode;
                currNode = currNode.next;
            }
            else {
                console.log('data not found')
                return;
            }
        }
        // Found the data to remove in currNode!
        prevNode.next = currNode.next;
    }
}

// aside: if class were to accessed elsewhere, would need to export
module.exports = {
    LinkedList,
};


// LL HELPER

const linkedListHelper = {
    
    display: function(list) {
        if (!list.head) return null;

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
        console.log('///////// \n' + listStr.join(' '));
    },
    removeDupes: function(list) {
        let currNode = list.head;

        // O(n^2) Polynomial/Quadratic Time Complexity
        // while (currNode) {
        //     while (currNode.next) {
        //         if (currNode.value === currNode.next.value) {
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
    },
};

// TEST DATA

let SLL = new LinkedList();

let testData = [2, 8, 7, 7, 8, 8, 7, 7, 9, 10, 10, 10, 200, 50, 10, 50, 50, 45, 45, 2, 2, 2];

// sort data first
testData.sort((a, b) => a - b);

testData.forEach(item => {
    SLL.insertLast(item);
});

linkedListHelper.display(SLL);
SLL.remove(200);
linkedListHelper.display(SLL);
linkedListHelper.removeDupes(SLL);
linkedListHelper.display(SLL);
