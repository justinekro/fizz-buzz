function FizzBuzz() {
	for (let i = 1; i <= 100; i++) {
		console.log(checkModulo(i));
	}
}

function checkModulo(i) {
	if (i % 3 === 0) {
		return "Fizz";
	}
}

// FizzBuzz();

module.exports = checkModulo;
