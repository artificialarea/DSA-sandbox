// src: https://courses.thinkful.com/mi-dsa-v1/checkpoint/2#find-the-most-common-letter

// Task: Given a sentence, find the most commonly occurring character

/* v0: naive solution (me) // INCOMPLETE
A simple solution would be...
to identify all the distinct characters in the sentence and have a counter for everytime an instance of that character appears, and then find and return the character with the largest count.

Technically: I'd store the character and count as key/values in an array
*/

function mostCommonChar(string) {

    let arrCount = [{w: 1}];

    let arrStr = string.toLowerCase().split('').filter(item => item !== ' ');

    console.log(arrStr);

    // Pause here. Failure
    for (const item of arrStr) {
        console.log(item)
        if (arrCount.find(item => item === Object.keys(arrStr))) {
            console.log('found!')
        }
    }

}

let str = 'Hello Wonders of the World!';
console.log(mostCommonChar(str));

