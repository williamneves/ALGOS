//acronym
function acronym(str){
    newstr = str.split(' ')
    acronym = []
    for (var i = 0;i<newstr.length;i++){
        for (var y = 0; y < newstr[i].length; y++){
            if (y == 0){
                acronym.push(newstr[i][y])
                continue
            }
            console.log(i)
        }
    }
    acronym = acronym.join('').toUpperCase()
    return acronym
}
console.log(acronym("hello  world   are you in"))

// reverseString
// function reverseString(str){
//     reversestr = ""
//     for (var i = str.length-1; i >= 0;i--){
//         reversestr+=str[i]
//         console.log(i)
//     }
//     return reversestr
// }
// console.log(reverseString("hello world"))

// function reversestr2ing(string){
//     count = 0
//     for (var x = string.length-1; x >= string.length/2;x--){
//         console.log(string)
//         temp = string[count]
//         console.log(temp,string[count])
//         string[count] = string[x]
//         console.log(string[count],string[x])
//         string[x] = temp
//     }
//     return string
// }
// console.log(reversestr2ing("hello world"))

name = 'william'
name[2] += 'b'
console.log(name)