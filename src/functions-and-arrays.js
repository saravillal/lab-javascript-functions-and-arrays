// Iteration #1: Find the maximum
//Implement the function maxOfTwoNumbers that takes two numbers as arguments and returns the bigger number.

const num1 = 100;
const num2 = 120;

function maxOfTwoNumbers(first, second, third) {
    if (first > second) {
        return first;
    } else if (second > first) {
        return second;}
}
console.log(maxOfTwoNumbers(num1, num2));


// Iteration #2: Find longest word

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord()
  {
    let max_str = words[0].length;
     let ans = words[0];
    for (let i = 1; i < words.length; i++) {
        var maxi = words[i].length;
        if (maxi > max_str) {
            ans = words[i];
            max_str = maxi;
        }
    }
    return ans;
}
console.log(findLongestWord(["ab", "a", "abcd"]));
console.log(findLongestWord(["ab", "ab", "ab"]));


// Iteration #3: Calculate the sum

let numeros = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];//El array de números 

function sumNumbers(numeros){
        
        let suma = 0;
        
        numeros.forEach (function(numero){
            suma += numero;
        });
        
        return suma;
        
    }
   
    
    let suma = sumNumbers(numeros); //La función de suma
    
    console.log(suma); //Resultado



// Iteration #4: Calculate the average
// Level 1: Array of numbers

let numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers() {
  
    var i = 0, summ = 0, ArrayLen = numbersAvg.length;
    while (i < ArrayLen) {
        summ = summ + numbersAvg[i++];
}
    return summ / ArrayLen;
}

var a = averageNumbers(numbersAvg);
console.log(a)



// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength() { }


// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray() {}



// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist() {}



// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes() {}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
