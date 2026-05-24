// 1. Function that validates user input
function validateUserInput(input) {
  if (typeof input !== "string") {
    throw new TypeError("Input must be a string");
  }

  if (input.trim() === "") {
    throw new Error("Input cannot be empty");
  }

  return "Valid input";
}

// Tests
try {
  console.log(validateUserInput("Hello"));
  console.log(validateUserInput(""));
} catch (error) {
  console.log(error.message);
}

try {
  console.log(validateUserInput(123));
} catch (error) {
  console.log(error.message);
}

function checkNumber(value) {
  if (typeof value !== "number") {
    throw new TypeError("Value must be a number");
  }

  if (value < 0) {
    throw new RangeError("Value must not be negative");
  }

  if (value === 0) {
    throw new Error("Value cannot be zero");
  }

  return "Number is valid";
}

// Tests
try {
  console.log(checkNumber(10));
  console.log(checkNumber(-5));
} catch (error) {
  console.log(error.name + ": " + error.message);
}

try {
  console.log(checkNumber("abc"));
} catch (error) {
  console.log(error.name + ": " + error.message);
}

function toUpperCase(str) {
  return str.toUpperCase();
}

function toLowerCase(str) {
  return str.toLowerCase();
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function countCharacters(str) {
  return str.length;
}

function getFirstItem(arr) {
  return arr[0];
}

function getLastItem(arr) {
  return arr[arr.length - 1];
}

function addItem(arr, item) {
  arr.push(item);
  return arr;
}

function removeLastItem(arr) {
  arr.pop();
  return arr;
}

function sortNumbers(arr) {
  return arr.slice().sort(function (a, b) {
    return a - b;
  });
}

console.log(toUpperCase("hello"));
console.log(toLowerCase("HELLO"));
console.log(capitalizeFirstLetter("javascript"));
console.log(reverseString("hello"));
console.log(countCharacters("JavaScript"));

console.log(getFirstItem([10, 20, 30]));
console.log(getLastItem([10, 20, 30]));
console.log(addItem([1, 2, 3], 4));
console.log(removeLastItem([1, 2, 3, 4]));
console.log(sortNumbers([9, 2, 7, 1, 5]));
