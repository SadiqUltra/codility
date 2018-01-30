/**
 * 1. PermMissingElem
 * Find the missing element in a given permutation.
 */
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let result = {}
    
    A.map((a, index) => result[index+1] = true )
    result[A.length+1] = true 
    
    A.map((a) => delete result[a])
    
    let intResult = parseInt(Object.keys(result)[0])
    
    return intResult
}
