let num1 = +prompt('Birinchi sonni kiriting !')
let num2 = +prompt('Ikkinchi sonni kiriting !')
console.log(num1 + num2);






let a = '12'
console.log(+a);










let num = Math.round(Math.random() * 100)
console.log(num);
if (num % 2 === 0) {
    console.log('Juft son');
}

else {
    console.log('Toq son');
}










let pr = prompt('soz kiriting !')
if (pr === 'Mars') {
    console.log(pr);
}


else {
    console.log('Mars IT school');
}













let array = ['Saidakbar', 'IT', 'Mars', 'JavaScript', 'Console log']

console.log(array);

let uzunSozlar = [];

for (let i = 0; i < array.length; i++) {
    let soz = array[i];
    if (soz.length >= 5) {
        uzunSozlar.push(soz);
    }
}

console.log(uzunSozlar);
























let juftSonlar = [];
let toqSonlar = [];

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        juftSonlar.push(i);
    } 
    else {
        toqSonlar.push(i);
    }
}

console.log(`Juft sonlar:${juftSonlar}`);
console.log(`Toq sonlar:${toqSonlar}`);










































// Fail
// Publish !
// I smell a series
