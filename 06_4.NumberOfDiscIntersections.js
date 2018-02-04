/**
  * 6.4 NumberOfDiscIntersections
  * Compute the number of intersections in a sequence of discs.
  * result: 100%, https://app.codility.com/demo/results/trainingSYV7GD-X3N/
  */

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let result = 0
    let starts = []
    let ends = []
    let length = A.length
    
     A.map((a, i) => {
        starts.push(i-a)
        ends.push(i+a)
    })
    starts.sort((a,b) => a-b)
    ends.sort((a,b) => a-b)
    
    // console.log(starts, ends)
    let count = 0
    let a = 0
    let b = 0
    
    while(a < length || b < length){
        if (result > 10000000)
            return -1
        
        if(a < length && starts[a] <= ends[b]){
            count++
            a++
            // console.log('+', count, result, a, b, starts[a], ends[b])
        }else{
            count--
            result += count
            b < length ? b++ : 0
            // console.log('-', count, result, a, b, starts[a], ends[b])
        }
    }
    
    return result
}

/*

-4 1
-1 4
 0 4
 0 5
 2 6
 5 8
 --------
  0 0 0 0 
+ 1 0 1 0 -4 1
+ 2 0 2 0 -1 1
+ 3 0 3 0  0 1
+ 4 0 4 0  0 1
- 3 3 4 1  2 1
+ 4 3 5 1  2 4
- 3 6 5 2  5 4
- 2 8 5 3  5 4
+ 3 8 6 3  5 6
- 2 10 6 4 u 8 
- 1 11 6 5 u u
- 0 11 6 6 

*/
