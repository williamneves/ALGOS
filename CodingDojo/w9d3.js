//Remove duplicate characters(case-sensitive) including
//punctuation. Keep only the last instance of each character
//"Snaps! crackles! pops!" -> "Snrackle ops!"
//scoop dedupe!
const dedupe = (str) => {
	// create a new array 
  let newStr = [];
  // split the str to an array
  let strList = str.split( '' );
  // make a reverse loop and unshift the first letter
  for ( let i = strList.length - 1; i >= 0; i-- ) {
    // checking if has already a char in the new array
		if (!newStr.includes(strList[i])) {
			newStr.unshift(strList[i]);
		}
	}

  // join an set the str = the the filtered array
	str = newStr.join('');

	return str;
};

console.log(dedupe2('Snaps! crackles! pops!'));
// console.log(dedupe('Did I shine my shoes today?'));
// console.log(dedupe('scoop dedupe!'));
// console.log(
// 	dedupe(
// 		'This is freaking insane because I live in Cincinnati but I want to live in Mississippi with my family!'
// 	)
// );
// console.log(dedupe('Sweet potato'));
