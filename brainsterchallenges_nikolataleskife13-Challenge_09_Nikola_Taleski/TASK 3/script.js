// Given numbers
let numbers = [88, 47, 13];

// Check for the smallest number
let smallest = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < smallest) {
    smallest = numbers[i];
  }
}

console.log(`The smallest number is ${smallest}`);

// Check for the largest number
let largest = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] >= largest) {
    largest = numbers[i];
  }
}

console.log(`The largest number is ${largest}`);

// Check if a number is prime
function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// Check if the smallest number is prime
if (isPrime(smallest)) {
  console.log(`The smallest number ${smallest} is prime.`);
} else {
  console.log(`The smallest number ${smallest} is not prime.`);
}

// Check if the largest number is prime
if (isPrime(largest)) {
  console.log(`The largest number ${largest} is prime.`);
} else {
  console.log(`The largest number ${largest} is not prime.`);
}