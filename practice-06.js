// _private Node class
class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

// Linked List with CRUD
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
        else { // without `else` the first item dupes?!?!

            let currNode = this.head;
            while (currNode.next) {
                // continue traversing through LL
                currNode = currNode.next;
            }
            // else, insert data at the end of LL
            currNode.next = new _Node(data, null);
        }
    }

    // retrieval ///////////////
    // update ///////////////
    // deletion ///////////////
}


// Function helpers 
// to display
// to remove sorted dupes
const linkedListHelper = {

    display: function(list) {
        if (!list.head) {
            // console.log('List is empty');
            return null;
        }

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
    }
};


// TEST DATA
let SLL = new LinkedList();
const testData = [1, 2, 3, 4, 5];


testData.forEach(item => {
    console.log(item);
    SLL.insertLast(item);
});

linkedListHelper.display(SLL);