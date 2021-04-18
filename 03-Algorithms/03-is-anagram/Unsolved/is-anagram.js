// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

let isAnagram = (strA, strB) => {
  let stringOne = strA.split(" ").join("").toLowerCase();
  // console.log(stringOne)
  let stringTwo = strB.split(" ").join("").toLowerCase();
  // console.log(stringTwo)
  let objOne = charCount(stringOne);
   console.log( objOne);
  let objTwo = charCount(stringTwo);
   console.log(objTwo);

  if (stringOne.length != stringTwo.length) {
    return false;
  }
  for (i = 0; i < stringOne.length; i++) {
    if (objOne[stringOne[i]] != objTwo[stringOne[i]]) {
      return false;
    }

    // console.log(stringOne[i]);
    // console.log(objOne[stringOne[i]]);
  }
  return true;
};

let charCount = (str) => {
  obj = {};
  for (i = 0; i < str.length; i++) {
    if (str[i] in obj) {
      obj[str[i]] = obj[str[i]] + 1;
    } else {
      obj[str[i]] = 1;
    }
  }
  return obj;
};

let result = isAnagram("snooze Alarms", "Alas No more Zs");
console.log(result);
