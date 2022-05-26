//Union Sorted Arrays
//Efficiently combine two pre-sorted arrays into a new sorted array
//no built in functions!!!

//Ex: given [2,4,7,9,10] and [2,3,5,7,9,10], return [2,3,4,5,7,9,10]
//Ex: given [1,2,2,2,7] and [2,2,6,6,7] return [1,2,2,2,6,6,7]
//Ex: given [1,5,9] and [2,6,10] return [1,2,5,6,9,10]

const union = (arrLeft, arrRight) => {
	// Union array
	let union = [];
	// set up two pointers
	let left = 0;
	let right = 0;
	// while both arrays have values
	while (left < arrLeft.length || right < arrRight.length) {
		// if the left array value is less than the right array value
		console.log(`left: ${left} ${arrLeft[left]}, right: ${right} ${arrRight[right]}`);
		if (arrLeft[left] < arrRight[right]) {
			console.log(`${arrLeft[left]} < ${arrRight[right]}, pushing ${arrLeft[left]}`);
			// push the left array value into the union array
			union.push(arrLeft[left]);
			// increment the left array pointer if the left pointer is < than arrLeft.length
			if (left < arrLeft.length) {
				left++;
			}
			// if the left array value is greater than the right array value
		}
		if (arrLeft[left] > arrRight[right]) {
			console.log(`${arrLeft[left]} > ${arrRight[right]}, pushing ${arrRight[right]}`);
			// push the right array value into the union array
			union.push(arrRight[right]);
			// increment the right array pointer if the left pointer is < than arrRight.length
			if (right < arrRight.length) {
				right++;
			}
			// if the left array value is equal to the right array value
		}
		if (arrLeft[left] === arrRight[right]) {
			console.log(`${arrLeft[left]} = ${arrRight[right]}, pushing ${arrLeft[left]}`);
			// push the left array value into the union array
			union.push(arrLeft[left]);
			// increment the left array pointer
			left++;
			// increment the right array pointer
			right++;
		}
	}
	return union;
};

// const union = (arrLeft, arrRight) => {
// 	// Union array
// 	let union = [];
// 	// set up two pointers
// 	let left = 0;
// 	let right = 0;
// 	// while both arrays have values
// 	while (left < arrLeft.length || right < arrRight.length) {
// 		// if the left array value is less than the right array value
// 		console.log(
// 			`leftidx: ${left} value: ${arrLeft[left]} | rightidx: ${right} value: ${arrRight[right]}`
// 		);

// 		if (arrLeft[left] === arrRight[right]) {
// 			console.log(`${arrLeft[left]} = ${arrRight[right]}, pushing ${arrLeft[left]}`);
// 			// push the left array value into the union array
// 			union.push(arrLeft[left]);
// 			// increment the left array pointer
// 			left++;
// 			// increment the right array pointer
// 			right++;
// 		}
// 		if (arrLeft[left] < arrRight[right] || arrLeft[left] > arrRight[right]) {
// 			console.log(`${arrLeft[left]} < ${arrRight[right]}, pushing ${arrLeft[left]}`);
// 			// push the left array value into the union array
// 			union.push(arrLeft[left]);
// 			// if the left array value is greater than the right array value
// 			console.log(`${arrLeft[left]} > ${arrRight[right]}, pushing ${arrRight[right]}`);
// 			// push the right array value into the union array
// 			union.push(arrRight[right]);
// 			// increment the left array pointer if the left pointer is < than arrLeft.length
// 			left++;
// 			// increment the right array pointer if the left pointer is < than arrRight.length
// 			right++;
// 			// if the left array value is equal to the right array value
// 		}
// 		console.log(left, arrLeft.length, right, arrRight.length);
// 		console.log(left < arrLeft.length || right < arrRight.length);
// 	}
// 	return union;
// };

// const union = ( arrLeft, arrRight ) => {
//   // Union array
//   let union = [];
//   // set up two pointers
//   let left = 0;
//   let right = 0;
//   // while both arrays have values
//   while ( left < arrLeft.length && right < arrRight.length ) {
//     // if the left array value is less than the right array value
//     console.log( `leftidx: ${left} value: ${arrLeft[ left ]} | rightidx: ${right} value: ${arrRight[ right ]}` );

//     if ( arrLeft[ left ] === arrRight[ right ]) {
//       console.log(`${arrLeft[ left ]} = ${arrRight[ right ]}, pushing ${arrLeft[ left ]}`);
//       // push the left array value into the union array
//       union.push( arrLeft[ left ] );
//       // increment both array pointers
//       left++;
//       right++;
//     }
//     if ( arrLeft[ left ] < arrRight[ right ] || arrLeft[ left ] > arrRight[ right ] ) {
//       console.log( `${arrLeft[ left ]} < ${arrRight[ right ]}, pushing ${arrLeft[ left ]} and ${arrRight[ right ]}` );

//       // push both the left and right array values into the union array
//       union.push( arrLeft[ left ] );
//       union.push( arrRight[ right ] );
//       // increment the both the left and right array pointers
//       left++;
//       right++;
//     }
//   }
//     // return the union array
//     return union
// }

console.log(union([2, 4, 7, 9, 10], [2, 3, 5, 7, 9, 10, 11, 12]));
console.log(union([1, 2, 2, 2, 7], [2, 2, 6, 6, 7]));
console.log(union([1, 5, 9], [2, 6, 10]));
