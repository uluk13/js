var a = 'hello'
var b = 10
var c

console.log(c);
console.log(typeof a);
console.log(typeof b);
console.log(a - b);
console.log(Boolean(a));
console.log(Boolean(''));





var sum = prompt("Введите сумму покупки:");
sum = Number(sum);

if (isNaN(sum)) {
  console.log("Ошибка! Введите число.");
} else {

  var discount = 0;

  if (sum >= 100 && sum <= 500) discount = 5;
  else if (sum > 500 && sum <= 1000) discount = 10;
  else if (sum > 1000) discount = 15;

  var result = sum - (sum * discount / 100);

  console.log("Скидка:", discount + "%");
  console.log("Итого:", result.toFixed(2));
}



