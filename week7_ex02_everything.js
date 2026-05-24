function sum(n) {
  if (typeof n !== "number" || isNaN(n)) {
    return "The value passed is not a number";
  }

  if (n % 1 !== 0) {
    return "The value passed is not a number";
  }

  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log(sum(5)); // 15
console.log(sum(10)); // 55
console.log(sum(3.5)); // The value passed is not a number
console.log(sum("7")); // The value passed is not a number

function factorial(n) {
  if (typeof n !== "number" || isNaN(n)) {
    return "The value passed is not a number";
  }

  if (n % 1 !== 0 || n < 0) {
    return "The value passed is not a number";
  }

  let result = 1;
  let steps = "";

  for (let i = n; i >= 1; i--) {
    result *= i;
    steps += i;
    if (i > 1) {
      steps += " * ";
    }
  }

  console.log(steps + " = " + result);
  return result;
}

factorial(4); // 4 * 3 * 2 * 1 = 24
factorial(5); // 5 * 4 * 3 * 2 * 1 = 120

function funkyMath(a, b, c, d) {
  if (arguments.length === 2) {
    return b - a;
  }

  if (arguments.length === 3) {
    return a + b + c;
  }

  if (arguments.length === 4) {
    return (a + b) / (c + d);
  }

  return "Please pass 2, 3, or 4 arguments";
}

console.log(funkyMath(8, 2)); // -6
console.log(funkyMath(1, 2, 3)); // 6
console.log(funkyMath(8, 2, 3, 5)); // 1.25

const numbers = [1, 2, 33, 45, 6, 44];
const oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i]);
  }
}

oddNumbers.sort((a, b) => a - b);

console.log(oddNumbers); // [1, 33, 45]

const me = {
  firstName: "Imaad",
  lastName: "Bassadien",
  age: "25",
  favouriteColour: "Blue",
  dreamCar: "GTR",
};

me.favouriteFood = "Pizza";

delete me.age;

console.log(me);
