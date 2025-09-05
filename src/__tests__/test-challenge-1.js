import { expect, it } from 'vitest'
import { sumOfNumbersTo } from '../assignment'

it(
    'challenge - 1 : my sumOfNumbersTo function can sum an array of numbers',
    () => {
        expect(sumOfNumbersTo(10)).toBe(55)
    },
)
// src/assignment.js

export function sumOfNumbersTo(destination) {
  // Check for invalid inputs
  if (typeof destination !== "number" || destination < 1) {
    return 0
  }

  // Formula method: sum of first n numbers = n * (n + 1) / 2
  return (destination * (destination + 1)) / 2
}








// Alternative iterative method: