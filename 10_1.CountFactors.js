/**
  * 10.1 CountFactors
  * Count factors of given number n.
  * 
  * result, 100: https://app.codility.com/demo/results/trainingYVJEW7-5WH/
  */
  
function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let result = 0
    let sqrN = Math.sqrt(N)
    // console.log(sqrN)
    
    for(let i = 1; i <= sqrN; i++){
        if(N % i === 0)
            result++
    }
    
    result *= 2
    
    if(sqrN === Math.floor(sqrN))
        result--
        
    return result
}
