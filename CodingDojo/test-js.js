// function validatePIN(pin) {

//     // Checking the length equals to 4 or 6 digits
//     var check_length = null
//     if (pin.length === 4 || pin.length === 6) {
//         check_length = true
//     }
//     else {
//         check_length = false
//     }

//     // Checking if each char is a number
//     var check_chars = true

//     for (var i = 0; i < pin.length; i++) {
//         if (!isNaN(pin[i])) {
//         }
//         else {
//             check_chars = false
//         }
//     }
//     if (check_length && check_chars) {
//         return true
//     }
//     else {
//         return false
//     }
// }
// console.log(validatePIN('123'))

function sumArr(arr){
    var sum = 0
    for (var i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    return sum
}
var result = sumArr([12,13,14])
console.log(result)