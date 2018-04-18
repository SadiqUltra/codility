/**
  * 11.2 CountNonDivisible
  * Calculate the number of elements of an array that are not divisors of each element.
  *
  * Result, 100%: https://app.codility.com/demo/results/training87D8NM-4DR
  */

function solution(A) {

  let count = {}

  // counting number frequency
  A.map(a => {
    //console.log(count[a])
    if (count[a] > 0) {

      count[a] = count[a] + 1

    } else {

      count[a] = 1
    }

  })

  // console.log(count)

  let divs = {}

  Object.keys(count).map(key => {

    let sum = 0
    let j = 1

    while (j * j <= key) {

      if (key % j == 0) {

        if (count[j] > 0) {

          sum += count[j]
        }

        // adding another dividor
        let k = key / j

        // scenario: 9 = 81 / 9. Escaping same number

        if (k != j) {

          if (count[k] > 0) {

            sum += count[k]
          }
        }

        // another possible solution: sum = sum * 2
        // if key is square number: sum -= 1
      }

      j++
    }

    divs[key] = A.length - sum
  })
  //    console.log(divs)
  let answer = []
  A.map(a => {

    answer.push(divs[a])
  })
  //    console.log(answer)

  return answer
}
