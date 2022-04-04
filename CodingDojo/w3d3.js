function bookIndex(input) { //['400','900-910','950'] => 400, 900-910,950
    let output = []; // this will be our array of strings
    for (var i = 0;i < input.length;i++){
        var temp = i // temp = 0
        //console.log("temp",temp)
        while (input[i]+1 == input[i+1]){
            i++
        }
        //console.log('i',i)
        if (temp == i){
            var str = `page ${input[i]}`
            output.push(str)
        } 
        else{
            var str = `pages ${input[temp]}-${input[i]}`
            output.push(str)
        }
    }

    return buildString(output);
}

function buildString(input) {
    // var string = input.join(", ")
    // return string
    output = ''
    for (var i = 0;i<input.length;i++){
        if (i == 0){
            output+=`${input[i]}`
        }
        else{
            output+=`, ${input[i]}`
        }
    }
    return output
}

console.log(bookIndex([1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 15, 17, 18]));
// returns "1-5, 8-12, 15, 17-18"
console.log(bookIndex([1,2,3,4,16,18,21,22,23,24])) // returns "1-4, 16, 18, 21-24"
console.log(bookIndex([332, 476])) // returns "332, 476"
console.log(bookIndex([7, 8, 9, 10, 11])) // returns "7-11"
console.log(bookIndex([2, 7, 8, 9, 10, 11])) // returns "2, 7-11"
console.log(bookIndex([7, 8, 9, 10, 11, 23])) // returns "7-11, 23"
console.log(bookIndex([998])); // returns "998"
