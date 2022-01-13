console.log('JS OK!')

// ! Snack 1

/* Il software deve chiedere 5 volte all'utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while. */

/* const result = document.getElementById('result');
let sum = 0; */

// # Eseguire con il ciclo while
/* let  i = 1;
while (i <= 5) {
    const number = parseInt(prompt('Inserisci un numero', '5'));
    if (!isNaN(number)) {
        sum += number;
        console.log(sum);
    }
    i++
} */

// # Eseguire con il ciclo for

/* for (let i = 1; i <= 5; i++) {
    const number = parseInt(prompt('Inserisci un numero', '5'));
    if (!isNaN(number)) {
        sum += number;
        console.log(sum);
    }
}

result.innerText = sum; */

// ! Snack 2

/* Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo */

/* const result = document.getElementById('result');
const number = parseInt(prompt('Inserisci un numero', '5'));

let typeNumber = number;

if (typeNumber % 2 === 0) {
    console.log(typeNumber)
} else {
    typeNumber += 1;
    console.log(typeNumber);
}

result.innerText = typeNumber; */

// ! Snack 3 

/* Generatori di "nomi cognomi" casuali: prendendo una lista di nomi e una lista di cognomi,
Gatsby vuole generare una lista di 3 invitati. */

// ! Snack 4

/* Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari */

const result = document.getElementById('result');
const number = [3, 24, 45, 49, 57, 64, 72, 83, 89, 97];

let sum = 0;
let i = 0;

while (i < number.lenght) {
    if (i % 2 !== 0) {
        sum += number[i];
        console.log(sum)
    }
    i++
}

result.innerHTML = sum;

// ! Snack 5

/* Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all'array che hanno meno elementi,
fino a quando ne avrà tanti quanto l'altro. */

