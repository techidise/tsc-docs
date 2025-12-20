"use strict";
// <***=======* // Run in the terminal "$tsc" + -w {the w means watch} => Don't us the file name if you want entire directory. Using the file name only affects that file.
///==================*> TS DOCs | "More on Functions" <*==============///
//****\\> Generic Functions <//****\\
const firstElement = (arr) => {
    return arr[0];
};
const str = firstElement(['a', 'b', 'c']);
const num = firstElement([1, 2, 3]);
const und = firstElement([]);
//* Inference *\\
const map = (arr, func) => {
    return arr.map(func);
};
const parsed = map(['1', '2', '3'], (n) => parseInt(n));
// Constraints \\
const longest = (a, b) => {
    if (a.length >= b.length) {
        return a;
    }
    else {
        return b;
    }
};
// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
console.log(longerArray);
// longerString is of type 'alice' | 'bob'
const longerString = longest('alice', 'bob');
console.log(longerString);
// Error! Numbers don't have a 'length' property
// const notOK = longest(10, 100);
// console.log(notOK);
//* Working w/ Contrained Values *\\
