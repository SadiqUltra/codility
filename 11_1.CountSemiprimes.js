/**
  * 11.1 CountSemiprimes
  * Count the semiprime numbers in the given range [a..b]
  * 
  * Result, 100%: https://app.codility.com/demo/results/trainingNWQPBF-GP2
  */

function solution(N, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    // console.log(N, P, Q)
    let primes = sieve(N)
    //console.log(primes)
    let semiprimes = Array.from(Array(N+1), () => false)
    primes.map((p, i) => {
        // is prime
        if(p === true){
            for(let j = i; j < N; j++){
                if(primes[j] === false) continue
                if(j*i> N) break
                
                semiprimes[j*i] = true
            }
        }
    })
    
    // console.log(semiprimes)
    let result = []
    
    let preSum = getPreSum(semiprimes, N)
    
    // console.log(preSum)
    
    P.map((p, index) => {
        let count = preSum[Q[index]] - preSum[P[index]]
        if(semiprimes[P[index]]) count++
        
        result.push(count)
    })
    
    // console.log(result)
    return result   
}

function getPreSum(semiprimes, N) {
    let count = 0
    let preSum = {}
    for(let i = 1; i <= N; i++){
        if(semiprimes[i] === true) count++
        // console.log(i, count, semiprimes[count])
        preSum[i] = count
    }
    return preSum
}

function sieve(n) {
    let sieve = Array.from(Array(n+1), () => true)
    sieve[0] = sieve[1] = false
    
    for(let i = 2; i*i < n; i++){
        if(sieve[i]){
            for(let j = i*i; j < n; j += i){
                sieve[j] = false
            }
        }
    }
    
    return sieve
}
