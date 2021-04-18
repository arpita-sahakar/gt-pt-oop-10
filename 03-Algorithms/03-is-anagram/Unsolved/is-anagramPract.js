// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

const charCount = (str) => {
    let countChar = {};
    for (i = 0; i < str.length; i++) {
      if (countChar[str[i]] != null) {
        countChar[str[i]] = countChar[str[i]] + 1;
      } else {
        countChar[str[i]] = 1;
      }
    }
    // console.log(countChar);
    return countChar;
    
  };
  // charCount("aarrppita");

  

let isAnagram = (strA, strB) => {

    // let strALC = strA.toLowerCase();
    // let strBLC = strB.toLowerCase();

    let objOne = charCount(strA);
    console.log(objOne);
    let objTwo = charCount(strB);
    console.log(objTwo);

    for(i=0 ; i<strA.length ; i++){
        if (objOne[strA[i]] != objTwo[strA[i]] ) {
            console.log("false");
            return (false)
        }else {
            console.log("true");
            return true
        }
    }
};

isAnagram("listenn", "silennt");




