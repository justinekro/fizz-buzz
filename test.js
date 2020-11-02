const checkModulo = require("./fizz_buzz");

test("program prints Fizz when the number is a multiple of 3", () => {
	expect(checkModulo(3)).toBe("Fizz");
});
