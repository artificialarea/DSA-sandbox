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

    insertFirst(data) {
        this.head = new _Node(data, this.head);
    }

    insertLast(data) {
        if (this.head === null) {
            this.insertFirst(data);
            return;
        }

        let currNode = this.head;
        while (currNode.next !== null) {
            currNode = currNode.next;
        }

        currNode.next = new _Node(data, null);
    }

    delete(data) {
        if (this.head === null) {
            console.log("this list is empty");
            return null;
        }

        // you have to keep track of previous node
        let prevNode = this.head;
        let currNode = this.head;

        while (currNode !== null && currNode.value !== data) {
            prevNode = currNode;
            currNode = currNode.next;
        }

        if (currNode === null) {
            console.log("item not found")
            return;
        }

        prevNode.next = currNode.next;
    }

    update(data, newData) {
        if (this.head == null) {
            console.log("empty list");
            return null;
        }

        let currNode = this.head;
        while (currNode.next !== null && currNode.value !== data) {
            currNode = currNode.next;
        }

        currNode.value = newData
    }

    show() {
        if (this.head == null) {
            console.log("empty list");
            return null;
        }

        let currNode = this.head;
        let listStr = [currNode.value];

        while (currNode.next !== null) {
            currNode = currNode.next;
            listStr.push(currNode.value);
        }

        console.log(listStr.join(" "));
    }

    // remove duplicates from a sorted list
    // the common solution is O(n^2)
    removeDups() {
        let currNode = this.head;
        while (currNode.next !== null) {
            while (currNode.value === currNode.next.value) {
                currNode.next = currNode.next.next;
            }
            currNode = currNode.next;
        }
    }

}

// 2. Given a sorted linked list, write an algorithm to delete all duplicate numbers from the sorted linked list.
let SLL = new LinkedList();
[1, 2, 2, 3, 5, 5, 5, 5, 5, 5, 5, 7, 8, 9, 12, 12, 15].forEach(num => {
    SLL.insertLast(num);
})

SLL.show();
SLL.removeDups();
SLL.show();

/////////////////////////////////////////////////////////////////////////////
// This is a more random Linked list and removeDups doesn't work as well here
// it needs to be modified to remove dups properly
console.log("/////////////////////////////////////////////////////////////////////////////");
[11, 12, 1, 2, 15, 2, 1, 3, 5, 31, 31, 31, 31, 5, 5, 5, 5, 5, 5, 7, 9, 8, 9, 12, 12, 15].forEach(num => {
    SLL.insertLast(num);
})

SLL.show();
SLL.removeDups();
SLL.show();
