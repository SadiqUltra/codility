/**
  * 9.1 MaxSliceSum
  * Find a maximum sum of a compact subsequence of array elements.
  * Result, 100%, solution1: https://app.codility.com/demo/results/trainingTGZAMU-BE2/
  * Result, 100%, solution2: https://app.codility.com/demo/results/trainingFX29ZF-BCD/ 
  */

function solution2(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
  let maxEnding = A[0]
	let maxSlice = A[0]
 
	for(let i = 1; i< A.length; i++){
		maxEnding = Math.max(A[i], maxEnding+A[i])
		maxSlice = Math.max(maxSlice, maxEnding)
	}
	
 
	return maxSlice
}

/////////////////////////////////////////////////////////////////////////////////////

function solution1(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
  let maxEnding = 0
	let maxSlice = 0
// 	let isAllNeg = true
	let maxElement = -Infinity
 
	A.map(a => {
		maxEnding = Math.max(0, maxEnding+a)
		maxSlice = Math.max(maxSlice, maxEnding)
		if(a > maxElement){
		    maxElement = a
		}
	})
	
	if(maxSlice === 0 && maxElement < 0){
	    return maxElement
	}
 
	return maxSlice
}
