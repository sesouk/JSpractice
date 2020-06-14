// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  // create an empty array to hold all the sub arrays
  // iterate 0 - n and push an empty sub array into results
  // create a counter variable starting at 1 to track which number
  // is pushed into the sub arrays
  // create variables to track the start columns and rows and the end columns and rows
  // the starting col and row will be 0
  // the ending col and row will be n - 1
  // make a while loop comparing when the starts are less than or equal to the ends
  // first for loop to assemble the top row
  // assign counter variable to array variable at index of start row at index of i
  // increment counter variable
  // increment start row
  // loop for the furthest right col
  // assign counter variable to array variable at index of i at index of end col
  // increment counter variable
  // decrement end col
  // for loop for the bottom row
  // assign counter variable to array variable at index of end row at index of i
  // increment counter variable
  // decrement end row
  // start col
  // assign counter variable to array variable at index of i at index of start col
  // increment counter variable
  let arr = []
  for (let i = 0; i < n; i++) {
    arr.push([])
  }
  let count = 1
  let startCol = 0
  let startRow = 0
  let endCol = n - 1
  let endRow = n -1
  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      arr[startRow][i] = count
      count++
    }
    startRow++
    for (let i = startRow; i <= endRow; i++) {
      arr[i][endCol] = count
      count++
    }
    endCol--
    for (let i = endCol; i >= startCol; i--) {
      arr[endRow][i] = count
      count++
    }
    endRow--
    for (let i = endRow; i >= startRow; i--) {
      arr[i][startCol] = count
      count++
    }
    startCol++
  }
  return arr
}

module.exports = matrix;
