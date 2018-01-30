/**
  * 4.2 FrogRiverOne
  * Find the earliest time when a frog can jump to the other side of a river.
  */

function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let lastLeaf = 0
    let isLeafs = {}

    
    for(let i = 0; i < A.length; i++){
        if(! isLeafs[A[i]]){
            isLeafs[A[i]] = true
            lastLeaf++
        }
        
        if(lastLeaf == X) return i
    }
    
    return -1
}
