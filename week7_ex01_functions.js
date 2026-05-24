function multiply(a, b, c) {
  if (a === b && b === c) {
    return "Arguments must not all be the same number";
  }
  return a * b * c;
}

const convertToSeconds = function (minutes) {
  return minutes * 60;
};

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(2)); // true
console.log(isPrime(4)); // false
console.log(isPrime(7)); // true
console.log(isPrime(9)); // false
