const stringToWordArray = ( str ) => {
  // split the string into an array of words using the space as the delimiter
  let wordArray = str.split( ' ' );
  // filter out the empty strings
  wordArray = wordArray.filter( word => word !== '' );

  return wordArray;
}

console.log(stringToWordArray("Did I shine my shoes today?"));
console.log(stringToWordArray("Did I shine my shoes today?      "));
console.log(stringToWordArray("two             words"));


const reverseWordOrder = ( str ) => {
  // split the string into an array of words using the space as the delimiter
  let WordArray = stringToWordArray( str );
  // reverse the array
  let reversedWordArray = WordArray.reverse();
  // join the array back into a string
  let reversedString = reversedWordArray.join( ' ' );
  // return the reversed string
  return reversedString;
}

console.log(reverseWordOrder("This is a test"));
console.log(reverseWordOrder("A man a plan a canal Panama"));