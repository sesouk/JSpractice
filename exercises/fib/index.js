// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// ITERATIVE
// function fib(n) {
//   // first 2 numbers will always be the same so we can manually add them into the variable
//   const res = [0, 1]
//   // loop up until n
//   // create variables inside the for loop to be the numbers to add together
//   // add the variables together and push the result into the array
//   for (let i = 2; i <= n; i++) {
//     const a = res[i - 1]
//     const b = res[i - 2]
//     res.push(a + b)
//   }
//   // return the number at the n index of the array
//   return res[n]
// }

// RECURSIVE
// think of the recursive solution as making a tree starting with n
// going until the base case is met of n = 0 || 1 and adding the amount of 1s to get the number
// function fib(n) {
//   if (n < 2) {
//     return n
//   }
//   return fib(n - 1) + fib(n - 2)
// }

// RECURSIVE W MEMOIZATION
// takes in a function as the argument
function memo(fn) {
  // hold the results of the function calls in an object
  const cache = {}
  // return function with
  // args spread as the arguments to make this reusable
  return function(...args) {
  // check if the argument being called has been called in the object
  // if it is return those results
    if (cache[args]) {
      return cache[args]
    }
  // otherwise get the results by calling the function argument with apply(this, args)
    const res = fn.apply(this, args)
  // assign the results to the object with the args as the key  
    cache[args] = res
  // return the result
    return res
  }
}

function slowFib(n) {
  if (n < 2) {
    return n
  }
  return fib(n - 1) + fib(n - 2)
}

const fib = memo(slowFib)

module.exports = fib;
