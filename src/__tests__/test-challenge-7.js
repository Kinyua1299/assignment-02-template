import { expect, it } from 'vitest'
import { findPrimeNumbers } from '../assignment'

it('challenge - 7 : my findPrimeNumbers function can find prime numbers in an array', () => {
    expect(findPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual({
        count: 4,
        sum: 17,
        arrayOfPrimes: [2, 3, 5, 7],
    })
})
export function findPrimeNumbers(numbers) {
  // function to check if number is prime
  function isPrime(n) {
    if (n < 2) return false
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false
      }
    }
    return true
  }

  let arrayOfPrimes = []
  let sum = 0

  for (let i = 0; i < numbers.length; i++) {
    if (isPrime(numbers[i])) {
      arrayOfPrimes.push(numbers[i])
      sum += numbers[i]
    }
  }

  let count = arrayOfPrimes.length

  return {
    count: count,
    sum: sum,
    arrayOfPrimes: arrayOfPrimes
  }
}
