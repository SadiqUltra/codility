/**
  * 9.2 MaxProfit
  * Given a log of stock prices compute the maximum possible earning
  * 
  * result, 100%: https://app.codility.com/demo/results/training2DC2BW-RUK
  */



function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let minPrice = Infinity
    let maxProfit = 0
    
    for(let i = 0; i < A.length; i++){
        minPrice = Math.min(minPrice, A[i])
        
        maxProfit = Math.max(maxProfit, A[i] - minPrice)
    }
    
    return maxProfit
}
