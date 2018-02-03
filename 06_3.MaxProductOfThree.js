/**
  * 6.3 MaxProductOfThree
  * Maximize A[P] * A[Q] * A[R] for any triplet (P, Q, R).
  * result: https://app.codility.com/demo/results/trainingB2D56P-7Y3/
  */

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort((x,y) => x-y )
    
    //NOTE: -1 * -1 = +1
    return Math.max(
        A[0]*A[1]*A[2],
        A[0]*A[1]*A[A.length-1],
        A[0]*A[A.length-2]*A[A.length-1],
        A[A.length-3]*A[A.length-2]*A[A.length-1],
    )
}
