// src: https://courses.thinkful.com/mi-dsa-v1/checkpoint/2#an-example

// Task: Finding the maximum value in an array

/* v2: Wholesale Refactor to reduce time complexity */




function max(array) {

    if (array.length === 0) return null;

    let currentMax = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > currentMax) {
            currentMax = array[i];
        }
    }

    return currentMax;
}

let arr = [42, 28, 4, 9, 38, 100, 50, 40, 8, 99];
console.log(max(arr));

// TIME COMPLEXITY  REDUCED from v1
// WorstCase:       O(n) Linear Time
// BestCase:        O(n) Linear Time