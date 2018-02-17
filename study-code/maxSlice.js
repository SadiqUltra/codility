const maxSlice = (A) => {
	let maxEnding = 0
	let maxSlice = 0
 
	A.map(a => {
		maxEnding = Math.max(0, maxEnding+a)
		maxSlice = Math.max(maxSlice, maxEnding)
	})
 
	return maxSlice
}
 
// let ms = maxSlice([5, -7, 3, 5, -2, 4, -1])
// console.log(ms)
