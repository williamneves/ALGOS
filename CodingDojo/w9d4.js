/* 
  You are given a list of integers. Find all the consecutive sets of 
  integers that adds up to the sum passed in as one of the inputs.
*/
const findConsecutiveSums = (nums, targetSum) => {
	// find a consectutive sums in the array
	// create a new array to store the result
	let result = [];
	// loop through the array
	for (let i = 0; i < nums.length; i++) {
		let currentSum = [];
		// create a loop to add the next number in the array
		for (let j = i; j < nums.length; j++) {
			// check if the current sum is equal to the target sum
			// push the current number to the current sum
			currentSum.push(nums[j]);
			if (currentSum.reduce((a, b) => a + b, 0) === targetSum) {
				// push the current sum to the result array
				result.push(currentSum);
				// check if the index is the last one
				// if it is, break the loop
				if (j === nums.length - 1) {
					break;
				}
			}
			// break the loop if the current sum is greater than the target sum
			if (currentSum.reduce((a, b) => a + b, 0) + nums[j] > targetSum) {
				break;
			}
		}
	}
	// return the result array
	return result;
};

const nums1 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16;
console.log(findConsecutiveSums(nums1, sum1));
// const expected1 = [
//   [2, 5, 3, 6],
//   [3, 6, 7],
// ];

const nums2 = [];
const sum2 = 5;
console.log(findConsecutiveSums(nums2, sum2));
// const expected2 = [];

const nums3 = [10, 15, 20, 35, 30];
const sum3 = 5;
console.log(findConsecutiveSums(nums3, sum3));
// const expected3 = [];

// Bonus:
const nums4 = [2, 5, 3, 6, 7, 0, -7, 23, 12];
const sum4 = 16;
console.log(findConsecutiveSums(nums4, sum4));
const expected4 = [
	[2, 5, 3, 6],
	[3, 6, 7],
	[3, 6, 7, 0],
	[3, 6, 7, 0, 0],
];
