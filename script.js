
const array = [1, 3, 5, 2, 4]
array.push(6)
console.log('добавить число в конец массива:',array)

array.shift()
console.log('удалить число в начале:',array)

const filter = array.filter(num => num % 2 === 0);
console.log('только четные числа:',filter)


let multiplied = array.map(num => num * 5);
console.log('каждое число умножено на 5:', multiplied);

let average = multiplied.reduce((sum, num) => sum + num, 0) / multiplied.length;
console.log('среднее арифметическое:', average);

console.log('по возрастанию:',multiplied.sort());


const celebrities = [
  { name: "Leonardo DiCaprio", age: 49, role: "Actor" },
  { name: "Taylor Swift", age: 34, role: "Singer" },
  { name: "Lionel Messi", age: 37, role: "Football player" },
  { name: "Ariana Grande", age: 31, role: "Singer" },
  { name: "Keanu Reeves", age: 60, role: "Actor" },
  { name: "Dwayne Johnson", age: 52, role: "Actor" },
  { name: "Billie Eilish", age: 19, role: "Singer" },
  { name: "Justin Bieber", age: 31, role: "Singer" },
  { name: "Zendaya", age: 28, role: "Actress" },
  { name: "Cristiano Ronaldo", age: 40, role: "Football player" }
];


console.log(celebrities.map(a => a.name));

console.log(celebrities.map((a) => {
    return a.name + " is a " + a.role;
}));


const result = celebrities.reduce((a,b) => {
  if (b.age < a.young.age ) {
    a.young = b
  }
  if (b.age > a.old.age) {
    a.old = b
  }
  return a
},
  {
  young: celebrities[0],
  old: celebrities[0]
}
)
console.log("Самый младший:",result.young);
console.log("Самый старший",result.old);

console.log("Разница между старшим и младшим:",result.old.age - result.young.age);




console.log(celebrities.some(a => a.age < 18));

console.log(celebrities.filter(a => a.age > 20));










