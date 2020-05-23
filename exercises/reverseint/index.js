// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Must first check if the number is negative with Math.sign before turning into a string and reversing otherwise the - will be messed up
// once checked the number is turned positive turned to a string, then an array, then reversed, then back to a number then turned back to a negative
// if the number is not negative we just string it, array it, reverse it, and number it
// function reverseInt(n) {
//   if (Math.sign(n) === -1) {
//     n * -1
//     return parseInt(n.toString().split('').reverse().join('')) * -1
//   } else {
//     return parseInt(n.toString().split('').reverse().join(''))
//   }
// }


//Similar solution except with a better use of Math.sign
//Since Math.sign returns either -1 or 1 depending on if it is positive or negative we don't need 2 return statements or an if statement
function reverseInt(n) {
  return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n)
}
module.exports = reverseInt;
