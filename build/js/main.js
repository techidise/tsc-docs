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
// const minimumLength = <T extends { length: number }>(
//   obj: T,
//   minimum: number
// ): T => {
//   if (obj.length >= minimum) {
//     return obj;
//   } else {
//     return { length: minimum };
//   }
// };
// 'arr' gets value { length: 6 }
// const arr = minimumLength([1, 2, 3], 6);
// console.log(arr.slice(0));
//* Specifying Type Arguments *\\
const combine = (arr1, arr2) => {
    return arr1.concat(arr2);
};
const arr = combine([1, 2, 3], ['hello']);
//* Guidelines for Writing Good Generic Functions *\\
// Pushing Type Parameters Down
const firstElementOne = (arr) => {
    return arr[0];
};
const firstElementTwo = (arr) => {
    return arr[0];
};
// a: number (good)
const a = firstElementOne([1, 2, 3]);
// b: any (bad)
const b = firstElementTwo([1, 2, 3]);
// Use Fewer Type Parameters
const filter1 = (arr, func) => {
    return arr.filter(func);
};
const filter2 = (arr, func) => {
    return arr.filter(func);
};
// Type Parameters Should Appear Twice
const greet = (s) => {
    console.log('Hello, ' + s);
};
greet('world');
const greetPlain = (s) => {
    console.log('Hello, ' + s);
};
greetPlain('Pornoville');
//***> Optional Parameters <***\\
