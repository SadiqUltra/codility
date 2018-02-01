/**
  * 5.1 CountDiv
  * Compute number of integers divisible by k in range [a..b].
  */

function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let result = parseInt(B/K) -  parseInt(A/K)
    
    if(A%K === 0) result++
        
    return result
}
