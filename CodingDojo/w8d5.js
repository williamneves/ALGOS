//changes array in place, but needs a sliced array
//returns the index of the pivot
const partition = (arr) => {
	// console.log(arr);
	const pivot = arr[0];
	let pivi = 0;

	for (let i = 1; i < arr.length; ++i) {
		if (arr[i] < pivot) {
			++pivi;
			for (let j = i - 1; j >= 0; --j) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return pivi;
};

//time for recursion again!!
//partition your array, then quickSort the left half
//and the right half.
//Each half should be partitioned and quickSorted recursively.
const quickSort = (arr) => {
	if (arr.length <= 1) {
		return arr;
	}

	const pivot = partition(arr);
	const left = arr.slice(0,pivot);
	const right = arr.slice(pivot+1);
	return [...quickSort(left), arr[pivot], ...quickSort(right)];

};

console.log(
	quickSort([7, 45, 2, 67, 3, 2, 1, 6, 4, 5, 2, 8, 14, 1, 3, 82, 90, -1, 0])
);
