import { sum } from "../sum"

test('the sum function should returns same value ', () => {
  const result = sum(3,4)

    // Assertion
    expect(result).toBe(7)
})
