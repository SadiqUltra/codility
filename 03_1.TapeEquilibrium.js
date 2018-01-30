/**
 * 1. TapeEquilibrium
 * Minimize the value |(A[0] + ... + A[P-1]) - (A[P] + ... + A[N-1])|.
 */

 function solution(A) {
     // write your code in JavaScript (Node.js 8.9.4)
     let first = A[0]
     let second = 0

     for(let i = 1; i< A.length; i++){
         second += A[i]   
     }

     let minDiff = Infinity

     for(let i = 1; i< A.length; i++) {
         let diff = Math.abs(second - first)
         if(minDiff > diff) minDiff = diff

         first += A[i]
         second -= A[i]
     }

     return minDiff
 }
