/**
  * 5.2 PassingCars
  * Count the number of passing cars on the road.
  */
  
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let zeros = 0
    let result = 0
    for(let i = 0; i < A.length; i++){
        
        if(result > 1000000000) {
            result = -1
            break
        }
        
        if(A[i] == 0) zeros++
        else result += zeros
    }
    
    return result
}
