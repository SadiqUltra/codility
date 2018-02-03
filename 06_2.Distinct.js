/**
  * 6.2 Distinct
  * Compute number of distinct values in an array.
  * result: https://app.codility.com/demo/results/trainingV4U252-ZFA/
  */

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let tmp = {}
    A.map(a => tmp[a]= true)
    
    return Object.keys(tmp).length
}
