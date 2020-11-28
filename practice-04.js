// Generic private Node class
class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

// Created Linked List class 
// with typical CRUD methods of insertion, retrieval, and deletion.
class LinkedList {
    constructor() {
        this.head = null;
    }

    // insertions /////////////
    insertFirst(data) {
        this.head = new _Node(data, this.head);
        return;
    }

    insertLast(data) {
        if (!this.head) {
            this.insertFirst(data);
        }
        else {
            let currNode = this.head;
            while (currNode.next) {
                currNode = currNode.next;
            }
            // else
            return currNode.next = new _Node(data, null);
        }
    }

    // retrieval //////////////
    find(data) {
        if (!this.head) return null;

        let currNode = this.head;
        while (currNode.value !== data) {
            if (currNode.next === null) {
                return null;
            }
            else {
                currNode = currNode.next;
            }
        }
        return currNode;
    }

    // deletion ///////////////
    delete(data) {
        if (!this.head) return null;

        // if node to be removed is the initial head 
        if (this.head.value === data) {
            this.head = this.head.next;
            return;
        }

        let currNode = this.head;
        let prevNode = this.head;

        while (currNode.value !== data) {
            if (currNode !== null) {
                prevNode = currNode;
                currNode = currNode.next;
            }
            else {
                return null;
            }
        }
        return prevNode.next = currNode.next;
    }

    removeDupesMarius() {
        let currentNode1 = this.head;

        while (currentNode1) {
            let currentNode2 = currentNode1.next;
            while (currentNode2) {
                if (currentNode2.value === currentNode1.value) {
                    this.delete(currentNode2);
                }
                currentNode2 = currentNode2.next;
            }
            currentNode1 = currentNode1.next;
        }

    }
}


// helper functions
const linkedListHelper = {

    display: function (list) {
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
        console.log('/////// \n' + listStr.join(' '));
    },
    removeDupes: function (list) {
        let currNode = list.head;

        // QUESTION RE: TWO APPROACHES + Big O

        // O(n^2) Polynomial/Quadratic Time Complexity
        while (currNode) {
            while (currNode.next) {
                if (currNode.value === currNode.next.value) {
                    currNode.next = currNode.next.next;
                }
                else {
                    currNode = currNode.next;
                }
            }
            currNode = currNode.next;
        }

        // IF LIST ALREADY SORTED
        // O(n) Linear Time Complexity, yes?
        while (currNode.next) {
            if (currNode.value === currNode.next.value) {
                currNode.next = currNode.next.next;
            }
            else {
                currNode = currNode.next;
            }
        }
    },
    removeDupesMariusOne: function (list) {
        let currentNode1 = list.head;

        while (currentNode1) {
            let currentNode2 = currentNode1.next;
            while (currentNode2) {
                if (currentNode2.value === currentNode1.value) {
                    list.remove(currentNode2);  // what method is this? .delete()?
                }
                currentNode2 = currentNode2.next;
            }
            currentNode1 = currentNode1.next;
        }
    },
    removeDupesMariusTwo: function (list) {
        let currNode = list.head;

        while (currNode) {
            while (currNode.next) {
                if (currNode.next.value === currNode.value) {
                    list.remove(currNode.next);  // what method is this? .delete()?  
                }
                // currNode.next = currNode.next.next;
                currNode = currNode.next;
            }
            currNode = currNode.next;
        }
    }
};

// TEST DATA
let SLL = new LinkedList();

// Unsorted List
const testData = [9, 9, 9, 1, 20, 9, 9, 3, 20, 3, 3, 3, 4, 5, 5, 5, 5];

// I guess a pre JS sort is cheating eh?
// testData.sort((a, b) => a - b);

testData.forEach(item => {
    SLL.insertLast(item);
});

linkedListHelper.display(SLL);

// linkedListHelper.removeDupes(SLL);

// MARIUS REMOVED DUPES
// linkedListHelper.removeDupesMariusOne(SLL);
// linkedListHelper.removeDupesMariusTwo(SLL);
SLL.removeDupesMarius();

// Marius inline?
// let currentNode1 = SLL.head;

// while (currentNode1) {
//     let currentNode2 = currentNode1.next;
//     while (currentNode2) {
//         if (currentNode2.value === currentNode1.value) {
//             SLL.remove(currentNode2);
//         }
//         currentNode2 = currentNode2.next;
//     }
//     currentNode1 = currentNode1.next;
// }

linkedListHelper.display(SLL);


