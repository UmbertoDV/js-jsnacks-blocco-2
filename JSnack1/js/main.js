const userNumber = parseInt(prompt("inserisci un numero"));

if (!isNaN(userNumber)) {
	if (userNumber % 2 == 0) {
		console.log(`numero è: ${userNumber}`);
	} else {
		console.log(
			`Il tuo numero è dispari, l'ho portato a pari ed è: ${
				userNumber + 1
			}`
		);
	}
}
console.log(totNumeriDispari);
