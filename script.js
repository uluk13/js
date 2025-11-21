console.log("home-work6");


var a = 'hello'
var b = 10
var c

console.log(c);
console.log(typeof a);
console.log(typeof b);
console.log(a - b);
console.log(a == b);





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

console.log("home-work7");


const orders = [

  {

    id: 1,

    customer: "Jhon",

    items: [

      { name: "Ноутбук",  price: 50000, quantity: 1 },

      { name: "Мышь",     price: 1500,  quantity: 2 }

    ]

  },

  {

    id: 2,

    customer: "Alan",

    items: [

      { name: "Телефон", price: 30000, quantity: 1 },

      { name: "Чехол",   price: 1000,  quantity: 3 }

    ]

  },

  {

    id: 3,

    customer: "Jane",

    items: [

      { name: "Клавиатура", price: 2500,  quantity: 1 },

      { name: "Монитор",    price: 12000, quantity: 1 }

    ]

  }

];

var total = 0
var maxOrderSum = 0
var maxOrder = 0

for (var i = 0; i < orders.length; i++) {
  var order = orders[i];
  var orderSum = 0

  for (var j = 0; j < order.items.length; j++) {
    var item = order.items[j];
    orderSum += item.price * item.quantity
  }
  console.log("client", order.customer, orderSum  );

  total += orderSum
  
  if(orderSum  > maxOrderSum) {
    maxOrderSum = orderSum;
    maxOrder = order
  }
  
}

console.log("Общий доход:", total);
console.log("самый дорогой заказ",maxOrder.customer , - maxOrderSum);



console.log("home-work8");


var a = [3, 7, 1, 9, 4];
var b = [10, 20, 5];
var c = [-5, -2, -10];


function getMax(arr) {
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}



console.log("Максимальное число",getMax(a));
console.log("Максимальное число",getMax(b)); 
console.log("Максимальное число",getMax(c)); 

