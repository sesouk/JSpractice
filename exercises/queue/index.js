// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// manipulating an array but constricting the methods to unshift and pop
// so that the data follows the first in first out
class Queue {
  // need something to store data in a constructor
  constructor() {
    this.data = []
  }
  // add method using unshift to add to start of the array
  add(record) {
    this.data.unshift(record)
  }
  // remove method using pop to take the last record out of the array
  remove() {
    return this.data.pop()
  }
}

module.exports = Queue;
