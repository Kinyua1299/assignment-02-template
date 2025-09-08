import { expect, it } from 'vitest'
import { evenNumbersWithin } from '../assignment'

it('challenge - 2 : my evenNumbersWithin function can count even numbers in array of numbers', () => {
    expect(evenNumbersWithin(10)).toStrictEqual({ count: 6, sum: 30, arrayOfEvenNumbers: [0, 2, 4, 6, 8, 10] })
})

export function evenNumbersWithin(n) {
  let arrayOfEvenNumbers = []
  let sum = 0

  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      arrayOfEvenNumbers.push(i)
      sum += i
    }
  }

  let count = arrayOfEvenNumbers.length

  return {
    count: count,
    sum: sum,
    arrayOfEvenNumbers: arrayOfEvenNumbers
  }
}



