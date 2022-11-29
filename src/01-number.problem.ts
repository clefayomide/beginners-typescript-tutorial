import { expect, it } from "vitest";
type num1 = 2 | 4
type num2 = 6 | 8

export const addTwoNumbers = (a : num1, b: num2) => {
  return a + b;
};

it("Should add the two numbers together", () => {
  expect(addTwoNumbers(2, 6)).toEqual(8);
  expect(addTwoNumbers(4, 8)).toEqual(12);
});
