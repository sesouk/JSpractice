// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// Create a for loop to count up to the given number, first case must be the most specific so find what number is a multiple of both 5 and 3 using the modulus operator and log "fizzbuzz"
// next find what is divisible by either 3 and 5 separately and log "fizz" or "buzz" respectively
// finally log the current number
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("fizzbuzz")
    } else if (i % 3 === 0) {
      console.log("fizz")
    } else if (i % 5 === 0) {
      console.log("buzz")
    } else {console.log(i);
    }
  }
}

module.exports = fizzBuzz;
