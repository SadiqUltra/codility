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
