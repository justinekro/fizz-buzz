function FizzBuzz() {
	for (let i = 1; i <= 100; i++) {
		console.log(checkModulo(i));
	}
}

function checkModulo(i) {
	if (i % 3 === 0 && i % 5 === 0) {
		return "FizzBuzz";
	} else if (i % 3 === 0) {
		return "Fizz";
	} else if (i % 5 === 0) {
		return "Buzz";
	}
}

// FizzBuzz();

module.exports = checkModulo;
