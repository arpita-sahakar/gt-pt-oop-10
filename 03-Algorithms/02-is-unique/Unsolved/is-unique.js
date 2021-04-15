// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

let isUnique = (arr) => {
    // let storeUniqueNo = "";
    // let isTheNoUnique = true

    for(let i=0; i<arr.length; i++){

        for(let j = i + 1; j<arr.length; j++){
            if(arr[i] == arr[j]){
                return false
            }
        }
    }
    return true
    

};

let result = isUnique([2,4,6,8,4]);
console.log(result);