// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Using JS methods
// function reverse(str) {
//   return str.split('').reverse().join('')
// }

// Using for of loop, good for when needing to iterate over everything
// function reverse(str) {
//   let newStr = ''
//   for (let character of str) {
//     newStr = character + newStr
//   }
//   return newStr
// }

// Change string to an array then reduce the array to a single value
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '')
}

module.exports = reverse;
