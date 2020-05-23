// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Reversing the str and comparing to the original
// function palindrome(str) {
//   Using methods
//   const rev = str.split('').reverse().join('')
//   return str === rev

//   Using reduce
//  const rev = str.split('').reduce((rev, char) => char + rev, '')
//  return rev === str

// Using for of loop
    // let newStr = ''
    // for (let character of str) {
    //   newStr = character + newStr
    // }
    // return newStr === str
// }

// Change to an array, every method will check every character at the given index and compare them working forwards and backwards in the array
// - i is moving through the array and - 1 is accounting for the 0 based index of arrays in JS
function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1]
  })
}

module.exports = palindrome;
