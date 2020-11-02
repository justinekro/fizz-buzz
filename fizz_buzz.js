function FizzBuzz() {
	for (let i = 1; i <= 100; i++) {
		console.log(checkModulo(i));
	}
}

function checkModulo(i) {
	if (i % 3 === 0 && i % 5 === 0) {
		return "FizzBuzz";
	} else if (i % 3 === 0 || (i + "").indexOf("3") > -1) {
		return "Fizz";
	} else if (i % 5 === 0) {
		return "Buzz";
	} else {
		return i;
	}
}

FizzBuzz();

module.exports = checkModulo;
