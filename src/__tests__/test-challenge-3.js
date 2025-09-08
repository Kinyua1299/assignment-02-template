import { expect, it } from 'vitest'
import { celsiusToFahrenheit } from '../assignment'

it('challenge - 3 : my celsiusToFahrenheit function can convert an array of temperatures', async () => {
    expect(celsiusToFahrenheit([51.21, 23, 0, -55, 100])).toStrictEqual([124, 73, 32, -67, 212])
})
export function celsiusToFahrenheit(celsiusArray) {
  let fahrenheitArray = []

  for (let i = 0; i < celsiusArray.length; i++) {
    let f = (celsiusArray[i] * 9/5) + 32
    // round so it matches the expected whole numbers
    fahrenheitArray.push(Math.round(f))
  }

  return fahrenheitArray
}
