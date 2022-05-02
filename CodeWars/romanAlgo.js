// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

// Example:

// solution('XXI'); // should return 21
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Courtesy of rosettacode.org

function solution(roman) {
	// complete the solution by transforming the
	// string roman numeral into an integer
	var romanDict = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
		IV: 4,
		IX: 9,
		XL: 40,
		XC: 90,
		CD: 400,
		CM: 900
	};
	let result = 0;
	let i = 0;
	while (i < roman.length) {
	
		if(roman[i] === 'I') {
			if(roman[i+1] === 'V') {
				result += romanDict.IV;
				i += 2;
			} else if(roman[i+1] === 'X') {
				result += romanDict.IX;
				i += 2;
			} else {
				result += romanDict.I;
				i++;
			}
		}
		if(roman[i] === 'X') {
			if(roman[i+1] === 'L') {
				result += romanDict.XL;
				i += 2;
			} else if(roman[i+1] === 'C') {
				result += romanDict.XC;
				i += 2;
			} else {
				result += romanDict.X;
				i++;
			}
		}
		if(roman[i] === 'C') {
			if(roman[i+1] === 'D') {
				result += romanDict.CD;
				i += 2;
			} else if(roman[i+1] === 'M') {
				result += romanDict.CM;
				i += 2;
			} else {
				result += romanDict.C;
				i++;
			}
		}
		if(roman[i] === 'V' || roman[i] === 'L' || roman[i] === 'D' || roman[i] === 'M') {
			result += romanDict[roman[i]];
			i++;
		}
	}
	return result;
}

console.log(solution('MMMCDXCIX'));
