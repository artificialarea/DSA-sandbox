// Walk through the HashMap implementation in the curriculum and understand it well. Then write a HashMap class and its core functions with open addressing as the collision resolution mechanism.

class HashMap {
    constructor(initialCapacity = 8) {
        this.length = 0;
        this._hashTable = [];
        this._capacity = initialCapacity;
        this._deleted = 0;
        this.MAX_LOAD_RATIO = 0.5;
        this.SIZE_RATIO = 3;
    }

    get(key) {
        const index = this._findSlot(key)

        if (this._hashTable[index] === undefined) {
            return undefined;
        }

        return this._hashTable[index].value;
    }

    set(key, value) {
        const loadRatio = (this.length + this._deleted + 1) / this._capacity;
        if (loadRatio > this.MAX_LOAD_RATIO) { // Minimize the chance a value ends up a long way from its hash position

            this._resize(this._capacity * this.SIZE_RATIO) // The ratio by which to increment the size of the hashmap
        }

        // Use our hashing function to get the index to slot our key/value into
        const index = this._findSlot(key);

        // Increment the length property when we add a new key/value
        if (!this._hashTable[index]) {
            this.length++;
        }
        // Our data is stored as an object in an array
        // and since objects are reference types, it is actually just the pointer to our object being stored in the array
        this._hashTable[index] = {
            key,
            value,
            DELETED: false
        }
    }

    delete(key) { // Open addressing adds complexity here, because we can't rely on the hashed index to be accurate every time.
        //  the simplest solution is to not actually delete the item at all, and just put a deleted marker in the slot. Then on resize you can actually clear out all of the deleted items. This means that the hash map loads up slightly more quickly, but simplifies the code significantly.

        const index = this._findSlot(key);
        const slot = this._hashTable[index];
        if (slot === undefined) {
            throw new Error('That key does not exist')
        }
        slot.DELETED = true;
        this.length--;
        this._deleted++;
    }

    keys() {
        const keysArray = [];

        this._hashTable.forEach(el => {
            keysArray.push(el.key)
        })

        return keysArray;
    }

    _findSlot(key) { // O(1) assuming we are avoiding excessive collisions
        const hash = HashMap._hashString(key);
        const start = hash % this._capacity;

        // We use a for loop to avoid collisions by open addressing
        for (let i = start; i < start + this._capacity; i++) {
            const index = i % this._capacity;
            const slot = this._hashTable[index];
            if (slot === undefined || (slot.key === key && !slot.DELETED)) {
                return index;
            }
        }
    }

    _resize(size) { // O(n) because were are looping over each key/value in order to add them to our new, larger hash table
        const oldSlots = this._hashTable;
        this._capacity = size;

        this.length = 0;
        this._deleted = 0;
        this._hashTable = [];

        for (const slot of oldSlots) {
            if (slot !== undefined && !slot.DELETED) {
                this.set(slot.key, slot.value);
            }
        }
    }

    // hashing function using djb2 algorithm
    static _hashString(string) {
        let hash = 5381;
        for (let i = 0; i < string.length; i++) {
            // bitwise shift left
            hash = (hash << 5) + hash + string.charCodeAt(i);
            // bitwise AND
            hash = hash & hash;
        }
        // bitwise zero-fill right shift
        return hash >>> 0;
    }
}

module.exports = HashMap;

/* -------------------------------------------------------------------------- */
/*                              Demonstration                                 */
/* -------------------------------------------------------------------------- */

// REMOVE DUPLICATES

// // Normal JS with Array
// const removeDuplicates = (string) => {
//     let initString = [];
//     let containerObject = {};

//     for (letter of string) {
//         // console.log(letter);
//         initString.push(letter);
//         if (!containerObject[letter]) {
//             containerObject[letter] = '';
//         }
//     }

//     //   console.log(containerObject);
//     console.log(initString.join(''));
//     return Object.keys(containerObject).join('');
// };

// console.log(removeDuplicates('google all that you can'));


// as Hash Table
function removeDuplicatesViaHashbrown(list) {
    const lib = new HashMap;

    let result = [];

    for (const element of list) {
        if (!lib.get(element)) { // if the element is not in the libary
            result.push(element);
            lib.set(element, true);
        }
    }
    console.log(result.join(' '))
    return result;
}

let initList = [11, 12, 1, 2, 15, 2, 1, 3, 5, 31, 31, 31, 31, 5, 5, 5, 5, 5, 5, 7, 9, 8, 9, 12, 12, 15];

console.log(initList.join(' '));
removeDuplicatesViaHashbrown(initList);