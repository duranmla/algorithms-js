import mergeSort from "../mergeSort";

test("given an array of numbers it return them sorted asc", () => {
    expect(mergeSort([4, 16, 1, 32, 8])).toEqual([1, 4, 8, 16, 32]);
});
