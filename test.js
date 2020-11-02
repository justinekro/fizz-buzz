const checkModulo = require("./fizz_buzz");

test("program prints Fizz when the number is a multiple of 3", () => {
	expect(checkModulo(3)).toBe("Fizz");
});

test("program prints Buzz when the number is a multiple of 5", () => {
	expect(checkModulo(10)).toBe("Buzz");
	expect(checkModulo(5)).toBe("Buzz");
});

test("program prints FizzBuzz when the number is a multiple of 3 and 5", () => {
	expect(checkModulo(15)).toBe("FizzBuzz");
	expect(checkModulo(45)).toBe("FizzBuzz");
});
