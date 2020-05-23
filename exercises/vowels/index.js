// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//   // create a count variable to hold the amount of vowels
//   let count = 0
//   // loop through the string and change the string to all uppercase or lowercase since they don't evaluate to the same
//   for (char of str.toLowerCase()) {
//   // check if the current character is equal to either the uppercase or lowercase vowel (whichever you chose in the previous step)
//     if (
//       char === 'a' ||
//       char === 'e' ||
//       char === 'i' ||
//       char === 'o' ||
//       char === 'u'
//     ) {
//   // increase the count variable by 1
//       count++
//     }
//   }
//   // return the count variable
//   return count
// }

// using includes
// function vowels(str) {
//   let count = 0
//   const check = ['a', 'e', 'i', 'o', 'u']

//   for (let char of str.toLowerCase()) {
//     if (check.includes(char)) {
//       count++
//     }
//   }
//   return count
// }

// using regex
function vowels(str) {
  const matches = str.match(/['aeiou']/gi)
  return matches ? matches.length : 0
}

module.exports = vowels;
