/**
 * 1. OddOccurrencesInArray
 * Find value that occurs in odd number of elements.
 */
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let results = {}

    A.map(a => {
        if(results[a] === true) delete results[a]
        else results[a] = true
    })

    // console.log(Object.keys(results)[0])
    return Number(Object.keys(results)[0])
}
