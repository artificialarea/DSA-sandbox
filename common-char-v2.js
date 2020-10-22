// src: https://courses.thinkful.com/mi-dsa-v1/checkpoint/2#find-the-most-common-letter

// Task: Given a sentence, find the most commonly occurring character

/* v2: optimized solution 
(what I proposed in my v0, but failed to implement... because I stupidly attempted to generate, access, update an array of objects, rather than simply creating an object with properties for each character)
To optimize this further you can introduce a JavaScript object. This will store a key-value pair where the key is the character, and the value is the number of times the character occurs. Then you can use the same max variant to find the character which occurs most often 
*/

function mostCommonChar(str) {

    if (str.length === 0) return null;

    str = str.toLowerCase();

    // 1. collect characters and count 'em
    const characters = {};
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        const characterCode = str.charCodeAt(i);

        // Filter non a-z characters
        if (characterCode < 97 || characterCode > 122) {
            continue;
            // terminate execution of the statements in this current iteration of loop
            // and continue execution of the loop with the next iteration
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue
            // console.log(char);
        }

        if (!(char in characters)) {  // `in` operator (^_^) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in
            characters[char] = 1;
            console.log(char, characters[char]);
        } else {
            characters[char]++;
            console.log(char, characters[char]);
        }
    }
    console.log(characters)
    // return characters;

    // 2. Find key with largest value
    let mostCommonCharacter = null;
    let maxOccurrences = 0;

    for (let char in characters) {
        const count = characters[char];

        if (count > maxOccurrences) {
            maxOccurrences = count;
            mostCommonCharacter = char;
        }
    }
    return `The most common character is '${mostCommonCharacter}', which appears ${maxOccurrences} times.`;
}

let str = 'Hello Wonders of the World, you @*&$#!';
console.log(mostCommonChar(str));


// TIME COMPLEXITY  

// WorstCase:       O(n) Linear Time
// BestCase:        O(n) Linear Time 

// Although v2 is still O(n), we only need to loop through the string 1 time and the hash map 1 time; far fewer than the 26 times from the v1 naive solution.