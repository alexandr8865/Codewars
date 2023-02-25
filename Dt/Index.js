function disemvowel(str) {
  let arr = str.split("");
  return arr.filter(filterVowels).join("");
}

function filterVowels(element) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  return !vowels.includes(element);
}

console.log(disemvowel("This website is for losers LOL!")); // "Ths wbst s fr lsrs LL!"

// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
