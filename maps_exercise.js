/************ TYLER GETTEL ************
 ************ MAPS EXERCIE ************/

/* QUICK QUESTION ONE
what does the following code return? */

console.log(new Set([1,1,2,2,3,3,4])); // {1, 2, 3, 4}

/* QUICK QUESTION 2
what does the following code return? */

console.log([...new Set("referee")].join("")); // "ref"

/* QUICK QUESTION 3
what does the Map m look like after running the following code? */

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
console.log(m); /* 0: {Array(3) => true}
                      {Array(3) => false}   */


/* hasDuplicate
write a function called hasDuplicate which accepts an array
and returns true or false if that array contains a duplicate*/

let hasDuplicate = (array) => {
    let set = new Set(array);
    if (array.length == set.size){
        return false
    } else {
        return true
    }
}

/*vowelCount
write a function called vowelCount which accepts a string and returns a map 
where the keys are numbers and the values are the count of the vowels in the string */

let vowelCount = (string) => {
    const vowelMap = new Map();
  for(let char of string){
    let lowerCaseChar = char.toLowerCase()
    if(isVowel(lowerCaseChar)){
      if(vowelMap.has(lowerCaseChar)){
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
      } else {
        vowelMap.set(lowerCaseChar, 1);
      }
    }
  }
  return vowelMap;
}
