// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
// //   // first loop and variable are the same as the stair problem
// //   // find the center index of the columns where in the first row will always be a # use Math.floor
//   const center = Math.floor(((2 * n - 1) / 2))
//   for (row = 0; row < n; row++) {
//     let lvl = ''
//     //     // loop through all the diff # of columns
//     //     // unlike the stairs we must go up to 2 * n - 1
//     for (let col = 0; col < 2 * n -1; col++) {
//       //       // decide where to put the # 
//       //       // looks 1 to the left and to the right (+ or - row) of the center index (checking col)
//       if (center - row <= col && center + row >= col) {
//         lvl += '#'
//       } else {
//         lvl += ' '
//       }
//     }
//     console.log(lvl); 
//   }
// }

// for recursion set up the arguments with default cases
function pyramid(n, row = 0, lvl = '') {
  // setup the base case
  if (n === row) {
    return
  }
  // detect the end of a lvl, log the string, and return the function increasing the row
  if (lvl.length === 2 * n -1) {
    console.log(lvl);
    return pyramid(n, row + 1)
  }
  // find the center index and decide whether or not to add a # or ' '
  const center = Math.floor(((2 * n - 1) / 2))
  // create a temporary variable add to hold what is being added to the string
  let add;
  // same comparison as without recursion except col is replaced with string length
  // change the add variable to either # or ' '
  if (center - row <= lvl.length && center + row >= lvl.length) {
    add = '#'
  } else {
    add = ' '
  }
  // call the function and add the temp variable to the string
  pyramid(n, row, lvl + add)
}
module.exports = pyramid;
