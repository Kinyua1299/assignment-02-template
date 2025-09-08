import { expect, it } from 'vitest'
import { oddNumbersWithin } from '../assignment'

it('challenge - 4 : my oddNumbersWithin function can find odd numbers from 0 to 10', () => {
    expect(oddNumbersWithin(10)).toStrictEqual({
        count: 5,
        sum: 25,
        arrayOfOddNumbers: [1, 3, 5, 7, 9],
    })
})

export function oddNumbersWithin(n) {
  let arrayOfOddNumbers = []
  let sum = 0

  for (let i = 0; i <= n; i++) {
    if (i % 2 !== 0) { // odd check
      arrayOfOddNumbers.push(i)
      sum += i
    }
  }

  let count = arrayOfOddNumbers.length

  return {
    count: count,
    sum: sum,
    arrayOfOddNumbers: arrayOfOddNumbers
  }
}
