/*
PRACTICE TASK 1 (v2):
Given a document, implement an algorithm to count the number of word occurrences.

Input: `"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`
Output: `Hello = 1, there = 1, how = 2, are = 1, you = 2`

///////////////////////////////////

v2: Marius' oh-so elegant solution (compared to my 01-1), although still need to refactor to remove punctuation.

*/

function wordCounter(str) {

    // object containing each unique word encountered and the number of instances it appears within the string
    const words = {};

    str = str.toLowerCase();

    // Parse all non-alphabetic characters from string 
    // (maintaining spaces between words for string split)
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) !== 32 && (str.charCodeAt(i) < 97 || str.charCodeAt(i) > 122)) {
            str = str.slice(0, i) + str.slice(i+1);
        }
    }

    str.split(' ').forEach(item => {
        words[item] = words[item] + 1 || 1;
    });

    return words;
}


let testData = 'Hello there, how are you? Can you tell me how to get to the nearest Starbucks?';

console.log(wordCounter(testData));


// TIME COMPLEXITY
// O(n) Linear Time, because the algorithm must go through every item in the array.