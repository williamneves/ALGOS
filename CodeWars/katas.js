// // // accum("abcd") -> "A-Bb-Ccc-Dddd"
// // // accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// // // accum("cwAt") -> "C-Ww-Aaa-Tttt"

// // function accum(s) {
// // 	// your code
// //     var stringList = s.split("")
// //     for (var i = 0; i < s.length;i++){
// //         stringList[i] = stringList[i].repeat(i+1)
// //         stringList[i] = stringList[i].toLowerCase()
// //         stringList[i] = stringList[i].charAt(0).toUpperCase() + stringList[i].slice(1);
// //     }
// //     stringList = stringList.toString().replace(/,/g,'-');

// //     return stringList;
// // }
// // accum("abcd")
// // accum("RqaEzty")

// function twoNumberSum(array, targetSum) {
//     // Write your code here.
//     var targetArr = []
//     for (var i = 0; i < array.length - 1; i++) {
//         for (var x = i + 1; x < array.length; x++) {
//             if (array[i] + array[x] == targetSum) {
//                 targetArr.push(array[i]);
//                 targetArr.push(array[x]);
//             }
//         }
//         console.log(targetArr)
//     }
//     return targetArr;
// }
// twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)

// function isValidSubsequence(array, sequence) {
//     // Write your code here.
//     var newSequence = []
    
//     for (var i = 0; i < array.length; i++) {
//         for (var y = 0; y < sequence.length; y++) {
//             if (sequence[y] == array[i] && newSequence.length < sequence.length) {
//                 newSequence.push(sequence[y])
//                 break

//             }
//         }
//     }
//     var a = JSON.stringify(newSequence)
//     var b = JSON.stringify(sequence)
//     console.log(a == b, a, b)
//     return a == b
// }
// isValidSubsequence([1, 1, 1, 1, 1], [1, 1, 1])

// function rowSumOddNumbers(n) {
//     // TODO
//     return n*n
// }
// console.log(rowSumOddNumbers(3))

// const binaryArrayToNumber = arr => {
//     // your code
//     var new_arr = arr.reverse()
//     sum = 0
//     for (var i = 0; i < new_arr.length; i++) {
//         if(i == 0 && arr[i] == 1){
//             sum++;
//             console.log(sum,i)
//         }
//         if(arr[i] == 1){
//             const factorialize = (num) =>  num === 0 ? 1 : num * factorialize(num-1)
//             sum += factorialize(i+1)
//             console.log(sum,i)
//         }
//         console.log(sum,i)

//     }
//     return sum
// };
// console.log(binaryArrayToNumber([1,0,0,1]))

var isAnagram = function(test, original) {
    letters1 = test.toLowerCase().split('');
    letters2 = original.toLowerCase().split('');
    letters1.sort();
    letters2.sort();
    console.log(letters1.join(''),letters2.join(''))
    if (letters1.join('') == letters2.join('')){
        return true
    }
    return false
};

console.log(isAnagram("foefet", "toffee"))
console.log(isAnagram("Buckethead", "DeathCubeK"))