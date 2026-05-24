// 1. Multiline string using template literals
const message = `Hello there,
welcome to my JavaScript code.
This is a multiline string using template literals.`;

console.log(message);

const createUserCard = (name, age, hobby) => {
  return `
    <div class="card">
      <h2>${name}</h2>
      <p>Age: ${age}</p>
      <p>Hobby: ${hobby}</p>
    </div>
  `;
};

console.log(createUserCard("Ava", 21, "Reading"));

const add = (a, b) => a + b;

const greet = (name) => `Hello, ${name}!`;

const square = (num) => num * num;

console.log(add(2, 3));
console.log(greet("Sam"));
console.log(square(4));

const numbers = [1, 2, 3, 4, 5, 6];

const doubled = numbers.map((num) => num * 2);
const evens = numbers.filter((num) => num % 2 === 0);
const total = numbers.reduce((sum, num) => sum + num, 0);

console.log(doubled);
console.log(evens);
console.log(total);
