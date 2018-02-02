/**
  * 5.4 GenomicRangeQuery
  * Find the minimal nucleotide from a range of sequence DNA.
  * result: https://app.codility.com/demo/results/trainingPHU6NH-WMK/
  */

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let countA = 0, countC = 0, countG = 0, countT = 0
    let A = [0], C = [0], G = [0], T = [0], factS = []
    
    for(let i = 0; i < S.length; i++){
        // console.log(S[i])
        switch(S[i]){
            case 'A':
                countA++
                factS.push(1)
                break
            case 'C':
                countC++
                factS.push(2)
                break
            case 'G':
                countG++
                factS.push(3)
                break
            case 'T':
                countT++
                factS.push(4)
                break
            default:
                break
        }
        A.push(countA)
        C.push(countC)
        G.push(countG)
        T.push(countT)
        // console.log('A:', A)
        // console.log('C:', C)
        // console.log('G:', G)
        // console.log('T:', T)
    }

    let results = []
    
    for(let i = 0; i < P.length; i++){
        if(Q[i] - P[i] == 0){
            results.push(factS[P[i]])
            // console.log(S[P[i]])
            continue
        }
        if( (A[Q[i] +1] - A[P[i]]) > 0){
            results.push(1)
            continue
        }
        if( (C[Q[i] +1] - C[P[i]]) > 0){
            results.push(2)
            continue
        }
        if( (G[Q[i] +1] - G[P[i]]) > 0){
            results.push(3)
            continue
        }
        if( (T[Q[i] +1] - T[P[i]]) > 0){
            results.push(4)
            continue
        }
    }
    
    // console.log(results)
    
    return results
    
}
