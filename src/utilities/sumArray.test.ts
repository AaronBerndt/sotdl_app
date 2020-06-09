import sumArray from "./sumArray";

describe("sumArray", () => {
  it("To be true", () => {
    expect(sumArray([1, 2])).toBe(3);
  });

  it("To be false", () => {
    expect(sumArray([1, 1]) === 3).toBe(false);
  });
});
