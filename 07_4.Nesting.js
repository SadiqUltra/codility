/**
  * 7.4 Nesting
  * Determine whether a given string of parentheses (single type) is properly nested.
  * result, 100%: https://app.codility.com/demo/results/trainingQZMMEU-MHU/
  */
 
function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let nests = []
    
    for(let i = 0; i < S.length; i++){
        if(S.charAt(i) === '('){
            nests.push('(')
            continue
        }
            
        
        if(nests.length === 0)
            return 0
        
        nests.pop()
    }
    
    if(nests.length === 0)
        return 1
    
    return 0
}
