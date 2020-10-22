// src: https://courses.thinkful.com/mi-dsa-v1/checkpoint/2#find-the-most-common-letter

// Task: Given a sentence, find the most commonly occurring character

/* v1: naive solution (thinkful)
A simple solution would be...
take each possible character in the alphabet and 
use a `maxOccurances` algorithm to find which occurs most often.
*/

function mostCommonChar(str) {

    if (str.length === 0) return null;

    str = str.toLowerCase();

    let maxOccurrences = 0;
    let mostCommonCharacter = null;

    for (let i = 0; i < 26; i++) {
        // Convert ascii charCode number to an a-z character a:97 — z:122
        const character = String.fromCharCode(97 + i);
        let count = 0;
        console.log('char: ', character, count);

        for (let j = 0; j < str.length; j++) {
            // console.log('char: ', character, count, 'str.char: ', str.charAt(j));
            if (str.charAt(j) == character) {
                count++;
                console.log('char: ', character, count);
            }
        }

        if (count > maxOccurrences) {
            mostCommonCharacter = character;
            maxOccurrences = count;
            console.log('mostCommonChar: ', mostCommonCharacter, maxOccurrences);
        }
    }
    return `The most common character is '${mostCommonCharacter}', which appears ${maxOccurrences} times.`;
}

let str = 'Hello Wonders of the World!';
console.log(mostCommonChar(str));


// TIME COMPLEXITY  
// although there are two nested loops, 
// the first loop condition is fixed to 26, 
// so it's a constant not a k for O(n^k) polynomial

// WorstCase:       O(n) Linear Time
// BestCase:        O(n) Linear Time 

// with a pretty high running time coefficient because we loop throught the entire array 1 time for each letter

// If our strings are unlikely to contain every letter then there is likely to be an optimization by initially making a set of the letters in the sentence, then searching through each of them, trading off time complexity for the additional memory used to store the set of letters.