// Dato un array contenente i risultati di una squadra (vittorie, pareggi e sconfitte) [W, W, L, X, X, W, L, X]
// Stampare a video il numero di vittorie, il numero di pareggi ed il numero di sconfitte.
const risultati = [
  "W",
  "W",
  "L",
  "X",
  "X",
  "W",
  "L",
  "X",
  "L",
  "L",
  "L",
  "L",
  "L",
];

let sconfitte = 0;
let vittorie = 0;
let pareggi = 0;

for (let i = 0; i < risultati.length; i++) {
  if (risultati[i] == "W") {
    vittorie++;
  } else if (risultati[i] == "X") {
    pareggi++;
  } else if (risultati[i] == "L") {
    sconfitte++;
  }
}

console.log(`sconfitte: ${sconfitte}`);
console.log(`vittorie: ${vittorie}`);
console.log(`pareggi: ${pareggi}`);
