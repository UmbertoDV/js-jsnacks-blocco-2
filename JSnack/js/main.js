// CREO UN ARRAY DI 10 NUMERI CASUALI
const allNumbers = [];

for (let i = 0; i < 10; i++) {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  allNumbers.push(randomNumber);
}
console.log(allNumbers);

// VEDERE QUALI NUMERI SONO DISPARI E FARE LA SOMMA
let totNumeriDispari = 0;

for (let i = 0; i < allNumbers.length; i++) {
  if (allNumbers[i] % 2 !== 0) {
    console.log(`Numero dispari: ${allNumbers[i]}`);
    totNumeriDispari = totNumeriDispari + allNumbers[i];
  }
}

console.log(totNumeriDispari);
