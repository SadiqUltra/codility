/**
  * 8.1 EquiLeader
  * Find the index S such that the leaders of the sequences A[0], A[1], ..., A[S] 
  * and A[S + 1], A[S + 2], ..., A[N - 1] are the same.
  * result, 100%: https://app.codility.com/demo/results/training7BKRYD-64J/
  */
  
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let a = A
    // a.sort()
    let sameStack = []
    for(let i = 0; i < a.length; i++){
        if(sameStack.length === 0){
            sameStack.push(i)
            continue
        }
        
        let poped = sameStack.pop()
        if(a[poped] === a[i]){
            sameStack.push(poped)
            sameStack.push(i)
        }
    }
    
    if(sameStack.length === 0){
        // console.log('000')
        return 0
    }
    
    let poped = sameStack.pop()
    let leader = a[poped]
    
    // count leader
    let leaderCount = 0
    
    A.map(a => {
        if(a === leader)
            leaderCount++
    })
    // console.log(leader, leaderCount)
    let leftLeader = 0
    
    let result = 0
    
    for(let i = 0; i < A.length; i++){
        let iOne = i+1
        let firstNhalf = Math.floor(iOne/2)
        let secondNhalf = Math.floor((A.length - iOne)/2)
        if(A[i] == leader){
            leftLeader++
        }
        let rightLeader = leaderCount - leftLeader
        // console.log(A[i], leftLeader, rightLeader)
        if(leftLeader > firstNhalf && rightLeader > secondNhalf){
            result++
        }
    }
    
    return result    
}
