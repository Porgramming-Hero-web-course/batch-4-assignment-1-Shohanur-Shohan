// Problem 3:
// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

{

const countWordOccurrences = (givenSentence: string, givenWord: string): number =>{

let matchedWordCount = 0;
const splitedSentence: string[] = givenSentence.split(' ');
for(const word of splitedSentence){
    if(word == givenWord){
        matchedWordCount += 1;
    }
    // console.log(matchedWordCount);
}
return matchedWordCount;

}


// Sample Input:
console.log(countWordOccurrences("I love typescript", "typescript"));




}