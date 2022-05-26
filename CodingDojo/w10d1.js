//Create a standalone function that accepts a string
//and an integer, and rotates the characters in the
//string to the right by that amount.
//this one must be done without built in methods
//("Did I shine my shoes today?", 9) ->
//"es today?Did I shine my sho"
const rotateString = ( str, num ) => {
  // split the string into an array
  let strArr = str.split( '' );
  // create a new array to store the rotated characters
  let rotatedArr = [];
  // loop through the array
  for ( let i = 0; i < strArr.length; i++ ) { 
    // if the index is less than the number of characters
    if ( i < num ) {
      // push the character to the new array
      rotatedArr.push( strArr[ i ] );
    } else {
      // if the index is greater than the number of characters
      // push the character to the new array
      rotatedArr.unshift( strArr[ i ] );
    }
  }
}

// let testString = "012345";
// console.log(rotateString(testString, 3));
let shoes = "Did I shine my shoes today?";
console.log(rotateString(shoes, 9));

//write a function that will return true if str2 is a
//rotation of str1. otherwise return false
//("Did I shine my shoes today?", "es today?Did I shine my shoe")
// -> returns true
const isRotation = (str1, str2) => {
}

console.log(isRotation("Did I shine my shoes today?", "es today?Did I shine my sho"));
console.log(isRotation("Did I shine my shoes today? ", "es today?Did I shine my sho"));