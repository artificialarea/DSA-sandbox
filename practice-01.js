/*
PRACTICE QUESTION 1:
Given a document, implement an algorithm to count the number of word occurrences.

Input: `"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`
Output: `Hello = 1, there = 1, how = 2, are = 1, you = 2`

///////////////////////////////////

v1: naive solution
A simple solution would be...
to parse the document and create an object to store key-value pairs, 
where the key is the first instance of each word we come across 
and it's value is the number of times the word appears. 

*/

function wordCounter(string) {

    // object to store data
    const wordCount = {};

    // Parse all non-alphabetic characters from string 
    // (but keep spaces for string split)
    string = string.toLowerCase();
    for (let i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) !== 32 && (string.charCodeAt(i) < 97 || string.charCodeAt(i) > 122)) {
            string = string.slice(0, i) + string.slice(i+1);
        }
    }

    // convert string into an array
    const strArr = string.split(' ');

    // identify and count instances of words
    for (let i = 0; i < strArr.length; i++) {
        let word = strArr[i];
        if (!wordCount[word]) {
            wordCount[word] = 1;
        } else {
            wordCount[word]++;
        }
    }

    return wordCount;
}


let test = 'Hello there, how are you? Can you tell me how to get to the nearest Starbucks?';

console.log(wordCounter(test));


// TIME COMPLEXITY
// O(n) Linear Time, because the algorithm must go through every item in the array.