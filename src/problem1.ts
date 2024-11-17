// Problem 1:
// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

const sumArray = (arrayOfNumbers: number[]) : number =>{

    const sum = arrayOfNumbers.reduce((acc, curr)=> acc + curr, 0);
    return sum;
   }
   
   // Sample Input:
   const numbers = [1, 2, 3, 4, 5];
   console.log(sumArray(numbers)); //output 15