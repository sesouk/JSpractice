// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// Not an optimal solution because repeating two for of loops that do the same thing
// first create variables that are the provided strings that don't include spaces and punctuations and makes the string all the same case
// initialize empty objects for the maps and create the maps with for of loops
// check if there are the same number of keys in both maps, if they are not equal they are not anagrams
// next iterate through one of the maps and check if the value at each key is equal to the value at the same key in the other map
// if they are not they are not anagrams, if they are they are anagrams
// function anagrams(stringA, stringB) {
//   const strA = stringA.replace(/[^\w]/g, '').toLowerCase()
//   const strB = stringB.replace(/[^\w]/g, '').toLowerCase()
//   const keyA = {}
//   const keyB = {}
//   for (let char of strA) {
//     keyA[char] = keyA + 1 || 1
//   }
//   for (let char of strB) {
//     keyB[char] = keyB + 1 || 1
//   }
//   if (Object.keys(keyA).length !== Object.keys(keyB).length) {
//     return false
//   }
//   for (let char in keyA) {
//     if (keyA[char] !== keyB[char]) {
//       return false
//     }
//   }
//   return true
// }

// Create a helper function that takes in a string and will remove the spaces, punctuations/symbols, makes it the string all the same case while also making the map
// call the helper function on the provided strings and set that to a variable to build the maps
// check if there are the same number of keys in both maps, if they are not equal they are not anagrams
// next iterate through one of the maps and check if the value at each key is equal to the value at the same key in the other map
// if they are not they are not anagrams, if they are they are anagrams
// function anagrams(stringA, stringB) {
//   const aCharMap = builder(stringA)
//   const bCharMap = builder(stringB)
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false
//   }
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false
//     }
//   }
//   return true
// }

// function builder(str) {
//   const charMap = {}
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap + 1 || 1
//   }
//   return charMap
// }


// Create a helper function that takes in a string, takes out the spaces and punctuation, makes it all the same case, 
// splits the string into an array, sorts the array, and makes a string again
// we now call that helper function in our main function on both strings and see if they are equal
// sort will sort the strings in the same way and if they are equal that means they are anagrams
function anagrams(stringA, stringB) {
  return remove(stringA) === remove(stringB)
}

function remove(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

module.exports = anagrams;
