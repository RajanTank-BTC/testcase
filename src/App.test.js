import { add } from './App'

test('add', () => {
  const value = add(45678, 89651)
  expect(value).toBe(135329)
})