/**
  * 6.1 Triangle
  * Determine whether a triangle can be built from a given set of edges.
  */

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let result = 0
    
    A.sort((a,b) => a-b)
    // console.log(A)
    
    for(let i = 2; i < A.length; i++){
        if(A[i-2] + A[i-1] > A[i]){
            result = 1
            break
        }
    }
    
    return result
}
