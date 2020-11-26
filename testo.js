const { LinkedList, linkedListHelper } = require('./testo-01');

function testo() {

    // create a new instance of a singly linked list object
    let SLL = new LinkedList();
    
    // task 1
    SLL.insertLast('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');

    // display
    linkedListHelper.display(SLL);
}

testo();