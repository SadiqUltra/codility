/**
  * 4.3 MissingInteger
  * 
  */

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let maxResult  = A.length + 1
    let d = {}
    
    for(let i = 0; i < maxResult; i++){
        d[i+1] = true
        delete d[A[i]]    
    }
    
    for(let i = 0; i < A.length; i++){
        
        delete d[A[i]]    
    }
    
    // console.log(d)
    
    return parseInt(Object.keys(d)[0])
}
