// Create _private Node class


// Create a Linked List class
// with some common crud methods for insertion, retrieval, and deletion



































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
};


// TEST DATA

