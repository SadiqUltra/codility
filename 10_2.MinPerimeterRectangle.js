/**
  * 10.2 MinPerimeterRectangle
  * Find the minimal perimeter of any rectangle whose area equals N.
  * 
  * result, 100: https://app.codility.com/demo/results/trainingMP3SH5-52U/
  */

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let sqrtN = Math.sqrt(N)
    sqrtN = Math.floor(sqrtN)
    
    let minSum = Infinity
    for(let i = sqrtN; i > 0; i--){
        if(N % i === 0){
            let tmpMinSum = (N / i + i) * 2
            if(minSum > tmpMinSum){
                minSum = tmpMinSum
            }
        }
    }
    
    return minSum
}
