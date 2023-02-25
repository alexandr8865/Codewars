function highAndLow(numbers) {
  const a = numbers.split(" ").map((e) => parseInt(e));
  return `${Math.max(...a)} ${Math.min(...a)}`;
}

console.log(highAndLow("3 12 444 12 0")); // "444 0"

// https://www.codewars.com/kata/554b4ac871d6813a03000035/solutions/javascript
