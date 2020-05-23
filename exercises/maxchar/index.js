// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// First create an empty object to hold the key value pairs to count the occurences of each character using a for of loop to iterate through all the characters
// also create empty variables to hold the max number from the key value pairs and the max character from the key value pairs
// creating the object is done by setting the key to either 1 if it does not exist yet, or the value plus 1 if it does exist
// once the object has been created you iterate through the object with a for in loop checking the values and seeing if they are greater than the max
// if it is greater you set the max to that value and the max character to that key
// the final step is to return the max character variable outside of the for in loop
function maxChar(str) {
  const charsObj = {}
  let max = 0
  let maxChar = ''
  for (let char of str) {
    charsObj[char] = charsObj[char] + 1 || 1 
  }
  for (let char in charsObj) {
    if (charsObj[char] > max) {
      max = charsObj[char]
      maxChar = char
    }
  }
  return maxChar
}

module.exports = maxChar;
