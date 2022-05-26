/*
 * Returns the k most frequently occurring numbers from the given unordered
 * nums array. Order in the return array should be highest frequecy first,
 * ordered to lowest frequency. If two or more numbers match frequency, the
 * order they appear in the array does not matter.
 */

const kMostFrequent = (nums, k) => {
	// create a new object to store the frequency of each number
	let frequency = {};
	// loop through the array
	for (let i = 0; i < nums.length; i++) {
		// check if the number is already in the object
		if (frequency[nums[i]]) {
			// if it is, increase the frequency by 1
			frequency[nums[i]]++;
		} else {
			// if it is not, set the frequency to 1
			frequency[nums[i]] = 1;
		}
	}
	// console.log(frequency);
	// console.log(Object.keys(frequency).length);
	// create a new array to store the numbers by frequency highest to lowest order
	let sortedNumberFrequency = [];
	// catch the last highest frequency number
  
  
  
  
	// while the object has more then 0 keys
	let count = Object.keys(frequency).length;
  // let highestFrequency = Object.values(frequency)[0];
  
  let highestFrequency;
	while (count > 0) {
    // find the highest frequency number
    highestFrequency = Object.values(frequency)[0];
    for ( let key in frequency ) {
      if ( frequency[ key ] > highestFrequency ) {
        highestFrequency = frequency[ key ];
      }
    }
    console.log(highestFrequency);
		for (let key in frequency) {
			// check if the current key is the highest or equal frequency
			if (frequency[key] >= highestFrequency) {
				// if it is, push the key to the sorted array
        // console.log(key)
        sortedNumberFrequency.push( key );
        // delete the key from the object
        delete frequency[ key ];
			}
    }
    count--;
	}
	// console.log(highestFrequency);
	// console.log(sortedNumberFrequency);
  let result = [];
  while ( k > 0 ) {
    result.push( sortedNumberFrequency.unshift() );
    k--;
  }
	// return the result array
	return result;
};

const nums1 = [1, 1, 1, 2, 2, 3];
const k1 = 2;
console.log(kMostFrequent(nums1, k1));
// const expected1 = [1, 2];
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

const nums2 = [0, 0, 0, 2, 2, 3, 3, 3, 3];
const k2 = 1;
console.log(kMostFrequent(nums2, k2));
// const expected2 = [0];
// Explanation: k being 1 means return the single most frequent element

const nums3 = [1, 1, 2, 2, 3, 3];
const k3 = 3;
console.log(kMostFrequent(nums3, k3));
// const expected3 = [1, 2, 3];

const nums4 = [5, 8, 2, 4, 0, 15, 16, 90, 5, 1, 5, 23, 42, 0, 6, 2, 8, 2, 5];
const k4 = 4;
console.log(kMostFrequent(nums4, k4));
// const expected3 = [5, 2, 0];
