/**
  * 4.4 MaxCounters
  * Calculate the values of counters after applying all alternating operations: increase counter by 1;
  * set value of all counters to current maximum.
  */

function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let counter = new Array(N)
    
    counter.fill(0)
    
    let max = 0
    let lastMax = 0
    
    for(let i = 0; i < A.length; i++){
    
        if(A[i] == N+1){
            lastMax = max
        }else{
            if(counter[A[i]-1] <  lastMax){
                counter[A[i]-1] =  lastMax
            }
            
            // console.log(counter[A[i]-1])
                
            if(++counter[A[i]-1] > max) max = counter[A[i]-1]
        }
        // console.log(counter)
    }
    
    for(let i=0; i < N; i++){
        if(counter[i] <  lastMax)
            counter[i] = lastMax
    }
    
    // console.log(counter)
    
    return counter
}
