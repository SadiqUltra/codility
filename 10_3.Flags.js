/**
  * 10.3 Flags
  * Find the maximum number of flags that can be set on mountain peaks.
  * 
  * result 100%, https://app.codility.com/demo/results/training7JKUTB-FSG
  */
  
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let peaks = []
    for(let i = 1; i < A.length-1; i++){
        if(A[i] > A[i-1] && A[i] > A[i+1]){
            peaks.push(i)
        }
    }
    
    // console.log(peaks)
    
    if(peaks.length <= 2){
        return peaks.length
    }
    
    let maxFlags = Math.min(
        Math.ceil(Math.sqrt(A.length)), peaks.length
    )
    // console.log(maxFlags)
    
    for(let i = maxFlags; i > 0; i--){
        // console.log(i, isFlagsPossible(peaks, i, i))
        if(isFlagsPossible(peaks, i, i)){
            return i
        }            
    }
}

function isFlagsPossible(peaks, flags, distance){
    let previousPeakIndex = 0 // js arrays' and objects' are like pointer
    flags--
    
    for(let i = 1; i < peaks.length; i++){
        if(peaks[i] - peaks[previousPeakIndex] >= distance){
            previousPeakIndex = i
            flags--
        }
        if(flags <= 0){
            return true   
        }
    }

    return flags <= 0
}
