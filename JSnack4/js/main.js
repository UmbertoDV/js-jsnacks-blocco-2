const allNumbersA = [];
const allNumbersB = [];

for (let i = 0; i < 10; i++) {
	const randomNumber = Math.floor(Math.random() * 100) + 1;
	allNumbersA.push(randomNumber);
}
for (let i = 0; i < 5; i++) {
	const randomNumber = Math.floor(Math.random() * 100) + 1;
	allNumbersB.push(randomNumber);
}
console.log(allNumbersA);
console.log(allNumbersB);

let tantiElementiLista;
let pochiElementiLista;

if (allNumbersA.length > allNumbersB.length) {
	tantiElementiLista = allNumbersA;
	pochiElementiLista = allNumbersB;
} else {
	tantiElementiLista = allNumbersB;
	pochiElementiLista = allNumbersA;
}
