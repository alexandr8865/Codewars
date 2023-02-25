function reverseWords(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

console.log(reverseWords("double  spaced  words")); // 'elbuod  decaps  sdrow'

// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
