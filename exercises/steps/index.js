// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//   // create a loop that will keep track of the rows
//   for (let row = 0; row < n; row++) {
//   // create a variable that will hold the strings to be logged
//     let stair = ''
//   // create a loop that will keep track of the columns
//     for (let col = 0; col < n; col++) {
//   // check if the current column is less than or equal to the current row
//       if (col <= row) {
//   // if it is add # to the string
//         stair += '#'
//       } else {
//   // otherwise add ' '
//         stair += ' '
//       }
//     }
//   // log the string inside of the outter loop
//     console.log(stair);
//   }
// }


// using recursion, make sure to add default cases and extra arguments
function steps(n, row = 0, stair = '') {
// create the base case
  if (n === row) {
    return
  }
// check if you are at the end of the string, log the string, and increase the row count
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row +1)
  }
// check whether to add a # or a ' ' to the string
// if the row is greater than or equal to the string length
  if (stair.length <= row) {
// add a #
    stair += '#'
  } else {
// otherwise add a ' '
    stair += ' '
  }
// call the function
  steps(n, row, stair)
}
module.exports = steps;
