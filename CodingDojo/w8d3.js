//combine two pre-sorted arrays into one sorted array
//return the newly combined array
//bonus challenge: combine in place into leftArr instead of a new array
const combine = (leftArr, rightArr) => {
	if (leftArr.length === 0) {
		return rightArr;
	}
	if (rightArr.length === 0) {
		return leftArr;
	}
	// push the rightArr value to leftArr
	for (let i = 0; i < rightArr.length; i++) {
		leftArr.push(rightArr[i]);

		// after each push, sorted the rightArr
		let tempIdx = leftArr.length;
		while (leftArr[tempIdx - 1] < leftArr[tempIdx - 2] || tempIdx === 2) {
			let tempValue = leftArr[tempIdx - 2];
			leftArr[tempIdx - 2] = leftArr[tempIdx - 1];
			leftArr[tempIdx - 1] = tempValue;
			tempIdx--;
		}
	}
	return leftArr;
};

// should return [0,1,2,3,4,6,7,9,11]
console.log(combine([1, 2, 7, 9], [0, 3, 4, 6, 11]));
console.log(combine([0, 3, 4, 6, 11], [1, 2, 7, 9]));

// should return [0,1]
console.log(combine([1], [0]));


/// Aternative loops

//combine two pre-sorted arrays into one sorted array
//return the newly combined array
//bonus challenge: combine in place into leftArr instead of a new array
const combinewithAllForLoops = (leftArr, rightArr) => {
	// push the rightArr value to leftArr
	for (let i = 0; i < rightArr.length; i++) {
		leftArr.push(rightArr[i]);

		// after each push, sorted the rightArr
    for (let tempIdx = leftArr.length; leftArr[ tempIdx - 1 ] < leftArr[ tempIdx - 2 ] || tempIdx === 2; tempIdx--) {
			let tempValue = leftArr[tempIdx - 2];
			leftArr[tempIdx - 2] = leftArr[tempIdx - 1];
			leftArr[tempIdx - 1] = tempValue;
		}
	}
	return leftArr;
};

// should return [0,1,2,3,4,6,7,9,11]
console.log("aternative",combinewithAllForLoops([1, 2, 7, 9], [0, 3, 4, 6, 11]));

// should return [0,1]
console.log("aternative",combinewithAllForLoops([1], [0]));