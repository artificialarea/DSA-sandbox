// src: https://courses.thinkful.com/mi-dsa-v1/checkpoint/2#an-example

// Task: Finding the maximum value in an array

/* v1: naive solution
// The simple solution would be to compare every value in the array with every other value.
// The value which is not less than any of the other values will be the maximum.
*/

function max(array) {

    for (const itemA of array) {
        // Assume that it is the maximum value until we know otherwise
        let isMax = true;
        console.log('ITEM_A: ', itemA, ' isMax: ', isMax);

        for (const itemB of array) {
            if (itemA < itemB) {
                /* There is a value greater than itemA, so it is not the
                   maximum */
                isMax = false;
                console.log('item_B: ', itemB, ' isMax: ', isMax);
            }
            console.log('Item_B: ', itemB, ' isMax: ', isMax);
        }

        // In the first instance in which all the `itemB` items in the array 
        // are established as less than `itemA`, 
        // the `isMax` variable will remain `true` 
        // once when it reaches this conditional,
        // so it can `return` the value of `itemA` and stop the process, 
        // no further checking required.
        if (isMax) {
            return itemA;
        }
    }
}

let arr = [101, 42, 28, 4, 9, 38, 100, 50, 40, 8, 99];
console.log(max(arr));

// TIME COMPLEXITY
// WorstCase:       O(n^2) Polynomial/Quadratic Time with nested loops
// BestCase:        O(n) Linear Time if first item in array isMax