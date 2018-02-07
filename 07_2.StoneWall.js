/**
  * 7.2 StoneWall
  * Cover "Manhattan skyline" using the minimum number of rectangles.
  * result (100%): https://app.codility.com/demo/results/trainingJZXJWW-SN9/
  */
  
function solution(H) {
    // write your code in JavaScript (Node.js 8.9.4)

    let count = 1
    let stackWall = [H[0]]
    
    for(let i = 1; i < H.length; i++){
        let poped = stackWall.pop()
        
        if(H[i] == poped){
            stackWall.push(poped)
            continue
        }
        
        if(H[i] > poped){
            stackWall.push(poped)
            stackWall.push(H[i])
            count++
            continue
        }
        // To escape possible loops
        if(H[i] == stackWall[0]){
            stackWall = [H[i]]
            continue
        }
        
        if(H[i] < stackWall[0]){
            stackWall = [H[i]]
            count++
            continue
        }
        // END_OF To escape possible loops
        
        
        while(H[i] < poped){
            poped = stackWall.pop()
        }
        stackWall.push(poped)
        
        // console.log(H[i], poped)
        if(H[i] != poped){
            count++
        }
        stackWall.push(H[i])
    }
    
    return count
}
