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

// Dare una condizione
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

/* const invite = [];
const firstName = ['Marco', 'Martina', 'Alessio'];
console.log(firstName);
const lastName = ['Salvatore', 'Polimeno', 'Garifo'];
console.log(lastName);

let numberInvite;

 */

// ! Snack 4

/* Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari */

// Creo un array
/* const result = document.getElementById('result');
const number = [3, 24, 45, 49, 57, 64, 72, 83, 89, 97];

let sum = 0;
let i = 0;

// # Eseguire un ciclo while
while (i < number.length) {
    if (i % 2 !== 0) {
        sum += number[i];
        console.log(sum)
    }
    i++
}

result.innerHTML = sum; */

// ! Snack 5

/* Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all'array che hanno meno elementi,
fino a quando ne avrà tanti quanto l'altro. */

const result = document.getElementById('result');

const randomNumber1 = Math.floor(Math.random() * 10) + 1;
const randomNumber2 = Math.floor(Math.random() * 10) + 1;

const serialNumber1 = [];
const serialNumber2 = [];

i = 0;

while (i < randomNumber1) {
    let number = Math.floor(Math.random() * 100) + 1;
    serialNumber1.push(number);
    i++;
}

while (i < randomNumber2) {
    let number = Math.floor(Math.random() * 100) + 1;
    serialNumber2.push(number);
    i++;
}

console.log(serialNumber1, serialNumber2);

j = 0;

let sum = serialNumber1.length - serialNumber2.length;
console.log(sum);

if (sum < 0) {
    while (j < -1*sum) {
        let number = Math.floor(Math.random() * 100);
        serialNumber1.push(number);
        j++;
        console.log("La lista 1 è piu' piccola")
    }
} else if (sum > 0) {
    while (j < sum) {
        let number = Math.floor(Math.random() * 100);
        serialNumber2.push(number);
        j++;
        console.log("La lista 2 è piu' piccola")
    }
} else {
    console.log('Entrambi hanno la stessa lunghezza')
}

console.log(serialNumber1, serialNumber2);

result.innerHTML = sum;







