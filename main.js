// ! 1. Write a function that uses a `for` loop to print numbers from 1 to 10. If the number is
// ! divisible by 3, skip printing the number. (0.5 Grade) Output: 1, 2, 4, 5, 7, 8, 10

// function loop() {
//   for (let i = 1; i <= 10; i++) {
//     if (i % 3 === 0) {
//       continue;
//     }
//     console.log(i);
//   }
// }
// loop();

// ! 2. Write a function that uses a `while` loop to calculate the sum of numbers from 1 to 100.

// function sumNumbers() {
//     let sum = 0;
//     let i = 1;
  
//     while (i <= 100) {
//       sum += i;
//       i++; 
//     }
  
//     return sum;
//   }
//   console.log(sumNumbers()); 

// ! 3. Implement a function using `forEach` to iterate over an array and print each element.

// function printArrayElements(arr) {
//     arr.forEach(element => {
//       console.log(element);
//     });
//   }
//   const array = [1, 2, 3, 4, 5];
//   printArrayElements(array);
  
// ! 4. Explain the difference between `forEach` and `for...of` loops in JavaScript.
// forEach:
// Works on arrays.
// Passes the element, index, and entire array as parameters to the callback.
// It doesn't break or return early from the loop

// for...of:
// Works on iterable objects (arrays, strings, maps, sets, etc.).
// Allows the use of break, continue, and return statements.

// ! 5- Write a function that destructures an object to extract values and returns a formatted string. (0.5 Grade)
// ! const person = {name: 'John', age: 25 }; Output: 'John is 25 years old'

// function formatPerson(person) {
//     const { name, age } = person; 
//     return `${name} is ${age} years old`;
//   }

//   const person = { name: 'John', age: 25 };
//   console.log(formatPerson(person)); 
  

// ! 6. Use the spread operator to merge two arrays, then return the merged array.

// function mergeArrays(arr1, arr2) {
//     return [...arr1, ...arr2];
//   }
//   const array1 = [1, 2, 3];
//   const array2 = [4, 5, 6];
//   console.log(mergeArrays(array1, array2)); 

// ! 7. Write a function that accepts multiple parameters (two or more) and returns their sum.

// function sum(...numbers) {
//     return numbers.reduce((acc, num) => acc + num, 0);
//   }
//   console.log(sum(1, 2, 3, 4)); 

// ! 8. Compare primitive and non-primitive data types in JavaScript with examples.

// Primitive data types:
// Immutable and hold a single value.
// Examples: string, number, boolean, null, undefined, symbol, bigint
// let x = 10;
// let y = x; // Copy by value
// x = 20;
// console.log(x); // Output: 20
// console.log(y); // Output: 10 

// Non-primitive data types:
// Mutable and hold multiple values or references.
// Examples: object, array, function.
// let obj1 = { name: 'Alice' };
// let obj2 = obj1; // Copy by reference
// obj1.name = 'Bob';
// console.log(obj2.name); // Output: 'Bob'



// ! 9. Explain how hoisting works in JavaScript and describe the Temporal Dead Zone (TDZ).

// Hoisting:
// Hoisting refers to the behavior where variable and function declarations are moved to the top of their scope during the compile phase.
// Temporal Dead Zone:
// The TDZ is the period between the start of the block scope and the point where a let or const variable is declared. 

// ! 10. Write a function that demonstrates closure by creating a counter function that returns
// ! the number of times it has been called.

// function createCounter() {
//     let count = 0;
//     return function() {
//       count++;
//       return count;
//     };
//   }
//   const counter = createCounter();
//   console.log(counter()); // Output: 1
//   console.log(counter()); // Output: 2
//   console.log(counter()); // Output: 3
  

// ! 11. Create a function that returns a promise which resolves after 3 seconds with a 'Success' message.

// function resolveAfter3Seconds() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve('Success');
//       }, 3000);
//     });
//   }
//   resolveAfter3Seconds().then((message) => console.log(message));

// ! 12. Convert the previous promise-based function to use `async` and `await`.

// async function asyncResolveAfter3Seconds() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve('Success');
//       }, 3000);
//     });
//   }
//   async function useAsyncFunction() {
//     const result = await asyncResolveAfter3Seconds();
//     console.log(result); // Output after 3 seconds: "Success"
//   }
//   useAsyncFunction();

// ! 13. Create a function that returns a promise, which resolves if a random number is greater than 5, otherwise it rejects.

// function randomNumberPromise() {
//     return new Promise((resolve, reject) => {
//       const randomNum = Math.floor(Math.random() * 10) + 1; 
//       if (randomNum > 5) {
//         resolve(`Success, number is ${randomNum}`);
//       } else {
//         reject(`Failure, number is ${randomNum}`);
//       }
//     });
//   }
//   randomNumberPromise()
//     .then((message) => console.log(message))
//     .catch((error) => console.error(error));


// ! 14. Implement a function that chains multiple .then() handlers to a promise to demonstrate promise chaining. 

// function chainedPromise() {
//     return new Promise((resolve) => {
//       resolve(5);
//     })
//       .then((num) => {
//         console.log(`Initial number: ${num}`);
//         return num * 2; 
//       })
//       .then((num) => {
//         console.log(`After multiplication: ${num}`);
//         return num + 10; 
//       })
//       .then((num) => {
//         console.log(`After addition: ${num}`);
//         return num - 3;
//       });
//   }
//   chainedPromise();

// ! 15. Implement a function that handles errors using `try...catch` in an asynchronous operation.

// ؟؟؟

