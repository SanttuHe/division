import { divide } from "../src/calculator.js";

describe("Division tests", () => {
  test("Divides two valid numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("Rejects string as first argument", () => {
    expect(() => divide("10", 2)).toThrow(TypeError);
  });

  test("Rejects string as second argument", () => {
    expect(() => divide(10, "2")).toThrow(TypeError);
  });

  test("Rejects NaN", () => {
    expect(() => divide(NaN, 2)).toThrow(TypeError);
  });

  test("Rejects division by zero", () => {
    expect(() => divide(10, 0)).toThrow(RangeError);
  });
});