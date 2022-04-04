// function sumDigits(number) {
//     var number_list
//     var sum = 0
//     if (number < 0) { number = -number }
//     number_list = (number.toString().split(''))
//     for (var y = 0; y < number_list.length; y++) {
//         sum += parseInt(number_list[y])
//     }
//     return sum
// }

// console.log(sumDigits(11))

function sumTwoSmallestNumbers(numbers) {
    //Code here
    var lowest = Infinity
    var lowest_2nd = Infinity
    for (var i = 0; i < numbers.length - 1; i++) {
        console.log(numbers[i],numbers[i + 1])
        if (numbers[i] < numbers[i + 1] && numbers[i] < lowest) {
            lowest = numbers[i]
        }
        if (numbers[i+1] < numbers[i] && numbers[i+1] < lowest) {
            lowest = numbers[i+1]
        }
        console.log(lowest,lowest_2nd)
    }
    for (var i = 0; i < numbers.length - 1; i++) {
        console.log(numbers[i],numbers[i + 1])
        if (numbers[i] < numbers[i + 1] && numbers[i] > lowest && numbers[i] < lowest_2nd) {
            lowest_2nd = numbers[i]
        }
        console.log(numbers[i+1],numbers[i])
        if (numbers[i+1] < numbers[i] && numbers[i+1] > lowest && numbers[i+1] < lowest_2nd) {
            lowest_2nd = numbers[i+1]
        }
        console.log(lowest,lowest_2nd)
    }
    return lowest + lowest_2nd
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]),"\n====\n====")
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]))