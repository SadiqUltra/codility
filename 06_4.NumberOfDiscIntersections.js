/**
  * 6.4 NumberOfDiscIntersections
  * Compute the number of intersections in a sequence of discs.
  * result: 87%, https://app.codility.com/demo/results/trainingJXX6XY-4QF/
  */

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let count = 0
    
    let circles = []
    
    A.map((a, i) => {
        circles.push([i-a, i+a])
    })
    
    circles.sort((a,b) => a[0] - b[0])
    
    // console.log(circles)
    
    for(let i = 1; i < circles.length; i++){
        for(let j = 0; j < i; j++)
            if(circles[j][1] - circles[i][0] >= 0){
                if(++count > 10000000){
                    count = -1
                    break
                }
            }
        if(count == -1)
            break
    }
    
    
    return count
}
