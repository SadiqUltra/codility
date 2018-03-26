
/**
  * 10.4 Peaks
  * Divide an array into the maximum number of same-sized blocks, 
  * each of which should contain an index P such that A[P - 1] < A[P] > A[P + 1].
  * 
  * Result, 100%: https://app.codility.com/demo/results/trainingXXMGFG-NJK
  */

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let peaksIndex = []
    
    for(let i = 1; i < A.length-1; i++){
        if(A[i] > A[i-1] && A[i] > A[i+1])
            peaksIndex.push(i)
    }
    
    if(peaksIndex.length < 2){
        return peaksIndex.length
    }
    
    // console.log(peaksIndex)
    // i: 1 2 1 _ 2 1 2 _ 1 2 1 _ 2 1 2 _ 1 2 1 _ 2 1 2 (possible)
    // i: 1 2 _ 1 2 _ 1 2 _ 1 2 _ 1 2 _ 1 2 _ 1 2 _ 1 2 _ 1 2 (not possible, lastone is not a peak)
    
    let maxBlocks = Math.min(
        Math.ceil(A.length/3), Math.ceil(A.length/peaksIndex.length)
    )
    
    // >= 2
    for(let i = maxBlocks; i > 1; i--){
        // can divide into `i` blocks
        if(A.length % i > 0){
            continue
        }
        
        if(allBlocksHavePeak(peaksIndex, A.length/i, A)){
            return i
        }   
    }
    
    return 1
}
// peaksIndex/A is/may passed by ref.
function allBlocksHavePeak(peaksIndex, numberOfElements, A){
    let allPeakIndex = peaksIndex.slice() // new array
    // console.log("ABHPn: ", numberOfElements, allPeakIndex)
    
    let hasPeak = true
    let loopLength = A.length/numberOfElements
    for(let i = 0; i < loopLength; i++){
        // console.log("ABHPi: ", i, hasPeak)
        if(hasPeak !== true){
            return false
        }
        hasPeak = false
        for(let j = 0; j < numberOfElements; j++){
            if(i*numberOfElements + j === allPeakIndex[0]){
                hasPeak = true
                allPeakIndex.shift()
            }
            // console.log("ABHPj: ", j, 'index', i*numberOfElements + j,  hasPeak, allPeakIndex)
        }
    }
    
    return hasPeak
}
