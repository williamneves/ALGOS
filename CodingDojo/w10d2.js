//You are given a string that may contain sequences of consecutive characters.
//Create a function to shorten a string by including the character, then the
//number of times it appears. For "aaaabbcddd" return "a4b2c1d3"
//no built in functions!!!! parseInt() is ok
const encode = (str) => {
	newStr = '';
	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		let count = 1;
		while (str[i + 1] === char) {
			count++;
			i++;
		}
		newStr += char + count;
	}
	return newStr;
};

console.log(encode('aaabbcccc'));
// console.log(encode("ddddeeeeeffgggg"));
// console.log(encode("aaaaabbbbbbbc"));
// console.log(encode("bb"));

//given an encoded string, decode and return it
//given "a3b2c1d3" return "aaabbcddd"
//parseInt() is ok
//special note: can your function handle "g14f12"?
const decode = (str) => {
	// split the str in two parts, one for the character and one for the number
	let chars = [];
	let repeat = [];
	for (let i = 0; i < str.length; i++) {
		console.log(str[i]);
		console.log('is a number?', typeof parseInt(str[i]) === 'number');
		console.log('is a string?',typeof parseInt(str[i]) != 'number');
		let num = '';
    if ( typeof parseInt( str[ i ] ) === 'number' ) {
      let idx = i;
      while (typeof parseInt(str[i]) === 'number') {
        num += parseInt(str[idx]);
        idx++;
			}
      repeat.push( num );
      i = idx - 1;
    }
    else if ( typeof parseInt(str[i]) != 'number' ) {
			chars.push(str[i]);
		}
	}
	console.log( chars );
	console.log( repeat );
};

console.log(decode('a33b2c4'));
// console.log(decode("t2h10j4"));

// console.log(parseInt("432"));
// console.log(parseInt2("432"));
