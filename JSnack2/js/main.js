const redTextElement = document.getElementById("text-red");
const greenTextElement = document.getElementById("text-green");

const allNumbers = [];

for (let i = 0; i < 10; i++) {
	const randomNumber = Math.floor(Math.random() * 100) + 1;
	allNumbers.push(randomNumber);
}
console.log(allNumbers);

for (let i = 0; i < allNumbers.length; i++) {
	const currentNumber = allNumbers[i];
	console.log(currentNumber);

	if (currentNumber % 2 == 0) {
		greenTextElement.append(`${currentNumber} `);
	} else {
		redTextElement.append(`${currentNumber} `);
	}
}
