/**
 * 4.1 PermCheck
 * Check whether array A is a permutation.
 */
 
 function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let expectedA = {}
    
    A.map((a, index) => expectedA[index+1] = true)
    
    A.map(a => delete expectedA[a])
    
    let result = Object.keys(expectedA).length === 0 ? 1 : 0
    
    return result
}
