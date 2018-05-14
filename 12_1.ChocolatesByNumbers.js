
/**
  * 12.1 ChocolatesByNumbers
  * There are N chocolates in a circle. Count the number of chocolates you will eat.
  *
  * Result, 100%: https://app.codility.com/demo/results/trainingTEXPE4-WPJ/
  * Difficulty Level: Very Easy
  */

function solution(N, M) {
    // write your code in JavaScript (Node.js 8.9.4)
    let gcd = GCD(N, M)
    
    return N / gcd
}


function GCD(a, b){
    if(a % b === 0)
        return b
    
    return GCD(b, a%b)
}
