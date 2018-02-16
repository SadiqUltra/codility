/**
  * 8.2 Dominator
  * Find an index of an array such that its value occurs at more than half of indices in the array.
  * 
  * Result, 100%: https://app.codility.com/demo/results/trainingU3HGSZ-B9B/
  */
  
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
     let equalStack = []
    
    for(let i = 0; i < A.length; i++){
        if(equalStack.length === 0){
            equalStack.push(i)
            continue
        }
        
        let poped = equalStack.pop()
        if(A[poped] === A[i]){
            equalStack.push(poped)
            equalStack.push(i)
        }
    }
    
    if(equalStack.length === 0){
        return -1
    }
    
    let leader = A[equalStack.pop()]
    // console.log(leader)
    let leaderCount = 0
    let result = -1
    
    for(let i = 0; i < A.length; i++){
        if(A[i] === leader){
            leaderCount++
            result = i
        }
    }
    
    if(leaderCount > A.length/2 === false){
        return -1
    }
    
    return result
    
    // for(let i = 0; i < A.length; i++){
    //     if(A[i] === leader){
    //         // console.log(i)
    //         return i
    //     }
    // }  
}
