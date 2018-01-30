/**
 * 2. FrogJmp
 * Count minimal number of jumps from position X to Y.
 */
 
function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let diff = Math.abs(X - Y)
    
    return  Math.ceil(diff/D)
}
