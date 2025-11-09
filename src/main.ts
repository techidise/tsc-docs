// <***=======* // Run in the terminal "$tsc" + -w {the w means watch} => Don't us the file name if you want entire directory. Using the file name only affects that file.

///==================*> TS DOCs | More on Functions <*==============///
// Function Type Expression \\
// function greeter(fn: (a: string) => void) {
//   fn('Hello, World');
// }

// const printToConsole = (s: string) => {
//   console.log(s);
// };

// greeter(printToConsole);

// Using type alias to name a function type.
// type GreetFunction = (a: string) => void;
// const greeter2 = (fn: GreetFunction) => {};

// Call Signatures \\
// type DescribableFunction = {
//   description: string;
//   (someArg: number): boolean;
// };

// const doSomething = (fn: DescribableFunction) => {
//   console.log(fn.description + ' return ' + fn(6));
// };

// const myFunc = (someArg: number) => {
//   return someArg > 3;
// };

// myFunc.description = 'default description';

// doSomething(myFunc);

// Construct Signature \\
// type SomeObject = any;

// type SomeConstructor = {
//   new (s: string): SomeObject;
// };
// const fn = (ctor: SomeConstructor) => {
//   return new ctor('hello');
// };

// interface CallorConstruct {
//   (n?: number): string;
//   new (s: string): Date;
// }

// const fzn = (ctor: CallorConstruct) => {
//   console.log(ctor(10));

//   console.log(new ctor('10'));
// };

// fn(Date);

// Generic Functions \\
// declare const secondElement = <Type>(arr: Type[]): Type | undefined => {
//   return arr[0];
// };

// const y = secondElement(['a', 'b', 'c']);
// const x = secondElement([1, 2, 3]);
// const z = secondElement([]);

// declare function firstElement<Type>(arr: Type[]): Type | undefined;

// const s = firstElement(['a', 'b', 'c']);
// const n = firstElement([1, 2, 3]);
// const u = firstElement([]);

// Inference \\
function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func);
}

const parsed = map(['1', '2', '3'], (n) => parseInt(n));

// Constraints \\
