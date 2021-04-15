// Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods


// opt-1
let linearSearch = (arr, target) => {

  let status = -1;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      status = i;
    }
  }
  console.log(status);
  return status;
};

//opt - 2
let linearSearch = (arr, target) => {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      console.log(i);
    }
  }
  console.log("-1");
};

linearSearch([10, 12, 14, 8, 15], 1);
