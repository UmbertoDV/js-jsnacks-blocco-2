const allNumbers = [];

for (let i = 0; i < 10; i++) {
	const randomNumber = Math.floor(Math.random() * 100) + 1;
	allNumbers.push(randomNumber);
}
console.log(allNumbers);

let somma = 0;

for (let i = 0; i < allNumbers.length; i++) {
	const currentNumber = allNumbers[i];

	if (i % 2 != 0) {
		somma += currentNumber; // somma = somma + currentNumber
	}
}

console.log(somma);
