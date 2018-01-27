/*
 * 1. BinaryGap
 * Find longest sequence of zeros in binary representation of an integer.
 *
 */

 // you can write to stdout for debugging purposes, e.g.
 // console.log('this is a debug message');

 function solution(N) {
     // write your code in JavaScript (Node.js 8.9.4)

     const binN = (N>>>0).toString(2)

     const binNLength = binN.length
     let onePosition = 0
     let largestGap = 0

     for(i=0; i<binNLength; i++) {
         if(binN.charAt(i) == 1){

             if(i>0){
                 largestGap = (i - onePosition -1) > largestGap ? (i - onePosition -1) : largestGap
             }

             onePosition = i
         }
     }

     return largestGap;
 }
