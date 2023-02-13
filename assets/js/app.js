///1 Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

function min(a,b){
	return a < b ? a: b;
}
console.log(min(2, 5));






////2 Напишіть функцію pow(x, n), яка повертає число x в n степені

function pow(x, n) {
 
result = x ** n;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Степінь ${n} не підтримується, використовуйте натуральне число`);
} else {
  alert( pow(x, n) );
}


///3 Перепишіть функцію, використовуючи

///1) '?'

function checkAge(age) {
  return (age > 18) ? true : confirm('Батьки дозволили?');
}





////2) '||' або '&&'


function checkAge(age) {
  return (age > 18) || confirm('Батьки дозволили?');
}

  