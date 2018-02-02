/**
  * 5.3 MinAvgTwoSlice
  * Find the minimal average of any slice containing at least two elements.
  * Result: https://app.codility.com/demo/results/training5W347D-DGK/
  */

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let min = averageOf2 = averageOf3 = Infinity
    let result = -1
    
    for(let i = 1; i < A.length; i++){
        averageOf2 =(A[i] + A[i -1])/2
        
        if(i < A.length -1){
            averageOf3 = ((A[i] + A[i -1] + A[i +1])/3)
        }
        
        if(averageOf3 < min){
            min = averageOf3
            result = i -1
        }
        
        if(averageOf2 < min){
            min = averageOf2
            result = i -1
        }
    }
    return result
}
