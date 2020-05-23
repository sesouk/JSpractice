// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// First initialize an empty array to hold the chunks, then loop through the given array, and add to the new array
// check the value of the last element in the new array, if it doesn't exist or is equal to the size given
// a new sub array with the current element will be pushed to the array
// if those conditions aren't met the current element will be added to the current sub array
// function chunk(array, size) {
//   let arr = []
//   for (let el of array) {
//     const last = arr[arr.length -1]
//     if (!last || last.length === size) {
//       arr.push([el])
//     } else {
//       last.push(el)
//     }
//   }
//   return arr
// }

// First initialize an empty array and a starting index for slice
// while loop will run while index is less than the given array's length to go through the entire array
// we will return a new array with slice starting first at 0 then going the index plus size to get the ending index
// once our first run through we will add the size to the index so we can slice starting at the correct next index
function chunk(array, size) {
  let arr = []
  let index = 0
  while (index < array.length) {
    arr.push(array.slice(index, index + size))
    index+=size
  }
  return arr
}

module.exports = chunk;
