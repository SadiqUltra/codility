/**
  * 9.1 MaxDoubleSliceSum
  * Find the maximal sum of any double slice.
  *
  * result, 100%: https://app.codility.com/demo/results/trainingHAMN4W-J3E/
  */
  
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    // console.log(A)
    
    let maxLeftSums = []
    let sum = 0
    maxLeftSums.push(0)
    
    for(let i = 1; i < A.length; i++){
        sum = Math.max(0, sum+A[i])
        maxLeftSums[i] = sum
    }
    // console.log(maxLeftSums)
    
    let maxRightSums = []
    sum = 0
    
    for(let i = A.length -2; i >= 0; i--){
        sum = Math.max(0, sum+A[i])
        maxRightSums[i] = sum
    }
    maxRightSums.push(0)
    // console.log(maxRightSums)
    
    let maxSum = 0
    let studyMaxSum = []
    for(let i = 1; i <= A.length -2; i++){
        maxSum = Math.max(maxSum, maxLeftSums[i-1] + maxRightSums[i+1])
        // studyMaxSum.push(maxSum)
    }
    // console.log(studyMaxSum)
    
    return maxSum
}
