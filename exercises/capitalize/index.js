// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// First create an empty array that will hold the new words with the capitalizations
// create an array from the string by splitting it on the " " to get the whole words (this can be done as a variable or in the upcoming for of loop)
// loop through the split array, in the loop the first character of the word will be capitalized using toUpperCase while the rest of the string is retrieved with slice
// the capital and the rest of the string will now be added together and pushed into the array containing the capitalized words
// finally return the capitals array and join it so that the spaces are put back into the string
// function capitalize(str) {
//   const newArr = []

//   for (let word of str.split(' ')) {
//     newArr.push(word[0].toUpperCase() + word.slice(1))
//   }
//   return newArr.join(' ')
// }

// Create a variable set to an empty string that will hold the new capitalized string
// loop through the str and check if the character to the left of the current character is a space, if so capitalize it
// because of this logic you have to account for there being no space to the left of the first character so make sure to capitalize that either in the if
// statement or when initializing the string
// next you add each character to the string variable while uppercasing the characters that need to be capitalized
function capitalize(str) {
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i - 1] === ' ' || str[i - 1] === undefined) {
      newStr += str[i].toUpperCase()
    } else {
      newStr += str[i]
    }
  }
  return newStr
}
module.exports = capitalize;
