// function threeNumberSum( array, targetSum ) {
//   // Your code here.
//   let result = [];
//   let sortedArray = array.sort( ( a, b ) => a - b );

//   // iterate through the array
//   for ( let i = 0; i < sortedArray.length; i++ ) {
//     let left = i + 1;
//     let right = sortedArray.length - 1;
//     while ( left < right ) {
//       let currentSum = sortedArray[i] + sortedArray[left] + sortedArray[right];
//       if ( currentSum === targetSum ) {
//         result.push( [ sortedArray[i], sortedArray[left], sortedArray[right] ] );
//         left++;
//         right--;
//       } else if ( currentSum < targetSum ) {
//         left++;
//       } else {
//         right--;
//       }
//     }
//   }
//   console.log( result );
//   return result;

// }

// threeNumberSum( [ 12, 3, 1, 2, -6, 5, -8, 6 ], 0 );

function smallestDifference(arrayOne, arrayTwo) {
	// Find the smallest difference between two arrays.
	let result = [];
	let sortedArrayOne = arrayOne.sort((a, b) => a - b);
	let sortedArrayTwo = arrayTwo.sort((a, b) => a - b);
	let smallestDiff = Infinity;

	for (let i = 0; i < sortedArrayOne.length; i++) {
    for ( let j = 0; j < sortedArrayTwo.length; j++ ) {
      let currentDiff = Math.abs(sortedArrayOne[i] - sortedArrayTwo[j]);
      if ( currentDiff < smallestDiff ) {
        smallestDiff = currentDiff;
        result = [sortedArrayOne[i], sortedArrayTwo[j]];
      }
    }
  }
  console.log( result );
  return result;
}

smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]);
