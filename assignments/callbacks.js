// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
    
  firstItem(items, function(first) {
    console.log(items[0])
  });
  }
  
*/



function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
}

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr.pop());
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x+y);
}

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x*y)
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  let containBool = false;
  for (let i in list){
    if(i == item){
      containBool = true;
      return containBool;
    }
  }
  return containBool;
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb){
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
    let unique_array = []
    for(let i in array){
        if(unique_array.indexOf(array[i]) == -1){
            unique_array.push(array[i])
        }
    }
    return cb(unique_array);
}
