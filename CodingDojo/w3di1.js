function recursiveGreatestCommonFactor(num1,num2){
    // your code here

    let n = 1 // Set a factor
    let CommonFactor
    // while (n <= num1 || n <= num2){ // When Factor is greater than Num1 or Num2, stop the While
        if (num1 % n == 0 && num2 % n == 0){
            CommonFactor = n // If num1 and num2 are divisible by same factor, add the factor to Common factor
        }
        n++ // increase the factor
    // }
    recursiveGreatestCommonFactor(num1,num2)
    return CommonFactor // Return the Last CommonFactor

}
console.log(recursiveGreatestCommonFactor(20,80))
// function findMissingNumber(n,divisor){
    
//     var count = 1
    
//     var result = 1
//     var results = [1]
//     var x = divisor/count
//     while (divisor % count == 0){
//         console.log(Math.floor(x))
//         x = divisor/count
//         console.log(Math.floor(x))
//         for (var i = 1; i <= count;i++){
//             result += n
//             results.push(result)
//             result += n/Math.floor(x)
//             results.push(result)
//         }
//         count++;
//     }
//     return results;
// }

// var y = findMissingNumber(4,2)
// console.log(y)