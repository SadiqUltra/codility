/**
  * 7.1 Brackets
  * Determine whether a given string of parentheses (multiple types) is properly nested.
  * result: https://app.codility.com/demo/results/trainingAQBZAC-B56/ 
  */

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let brackets = []
    let first = '({['
    let last = ')}]'
    
    for(let i = 0; i < S.length; i++){
        // console.log(brackets)
        if(first.indexOf(S[i]) > -1){
            brackets.push(S[i])
            continue
        }
        if(brackets.length < 1){
            return 0
        }
    
        
        let poped = brackets.pop()
        let lastOfPoped = first.indexOf(poped)
        // console.log('poped:', poped, S[i])
        
        if(S[i] !== last[lastOfPoped]){
            return 0
        }
    }
    // console.log(brackets)
    
    if(brackets.length == 0){
        return 1
    }
    
    return 0
}
