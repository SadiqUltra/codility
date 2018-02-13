/**
  * 7.3 Fish
  * N voracious fish are moving along a river. Calculate how many fish are alive.
  * result, 100%: https://app.codility.com/demo/results/trainingAFASSH-TZN/
  */

function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    let survived = 0
    let downStreams = []

    for(let i = 0; i < A.length; i++){
      // console.log(i)
        if(B[i] == 1){
            downStreams.push(i)
            continue
        }

        for(let j = downStreams.length-1; j >= 0; j--){
            if(A[downStreams[j]] > A[i])
                break
            
            downStreams.pop()
        }

        if(downStreams.length == 0)
            survived++
    }


    return survived + downStreams.length
}
