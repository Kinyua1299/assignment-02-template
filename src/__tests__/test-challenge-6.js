import { expect, it } from 'vitest'
import { calculateFactorials } from '../assignment'

it('challenge - 6 : my calculateFactorials function can calculate factorials for positive numbers', () => {
    expect(calculateFactorials([0, 1, 2, 3, 4, 5])).toStrictEqual([1, 1, 2, 6, 24, 120])
})

export function calculateFactorials(numbers) {
  // helper function for factorial
  function factorial(n) {
    let result = 1
    for (let i = 1; i <= n; i++) {
      result *= i
    }
    return result
  }

  // map each number to its factorial
  return numbers.map(num => factorial(num))
}
