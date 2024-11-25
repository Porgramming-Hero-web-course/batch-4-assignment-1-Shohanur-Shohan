{
// Problem 2:
// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

const removeDuplicates = (arrayOfNumbers: number[]) : number[] =>{

    const newArray: number[] = [];

    for(const num of arrayOfNumbers.sort()){

        if(!newArray.includes(num)){
            newArray.push(num);

        }
    }

    return newArray;

}

// Sample Input:
const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(numbers))

// Sample Output:
// [1, 2, 3, 4, 5]


}