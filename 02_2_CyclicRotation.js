/**
 * 1. CyclicRotation
 * Rotate an array to the right by a given number of steps.
 */


function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    const loopLenght = K % A.length
    for(let i = 0; i < loopLenght; i++){
        const poped = A.pop()
        A.unshift(poped)
    }

    return A;
}
