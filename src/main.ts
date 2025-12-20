// <***=======* // Run in the terminal "$tsc" + -w {the w means watch} => Don't us the file name if you want entire directory. Using the file name only affects that file.

///==================*> TS DOCs | "More on Functions" <*==============///

//****\\> Generic Functions <//****\\
const firstElement = <T>(arr: T[]): T | undefined => {
  return arr[0];
};

const str = firstElement(['a', 'b', 'c']);
const num = firstElement([1, 2, 3]);
const und = firstElement([]);

//* Inference *\\
const map = <Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] => {
  return arr.map(func);
};

const parsed = map(['1', '2', '3'], (n) => parseInt(n));

// Constraints \\
const longest = <T extends { length: number }>(a: T, b: T) => {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
};
