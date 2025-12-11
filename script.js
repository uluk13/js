const student = { name: "Ivan", age: 21, skills: ["js", "CSS"] };

const { name, age, skills } = student;
const [js, css] = skills;
console.log(name);
console.log(age);
console.log(js, css);

const printStudent = ({ name, age, skills }) => {
  console.log(`Student ${name}, age ${age}`);
};
printStudent(student);

const sumAndMultiply = (first, ...rest) => {
  const sum = rest.reduce((a, b) => a + b);
  return first * sum;
}

console.log(sumAndMultiply(2, 1, 3, 4)); 


const arrayFirst = [4, 5, 6]
const arraySecond = [1, 2]
const arrayThird = [9, 10]
const arrayFourth = [3]
const arrayFiveth = [7, 8]

const newArr = [...arraySecond, ...arrayFourth, ...arrayFirst, ...arrayFiveth, ...arrayThird]
console.log(newArr);

