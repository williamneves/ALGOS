// Given a dollar amount with change (an integer w/decimal) convert to change. Make sure to count the largest denomination first!

// Example: 3.21 --> 12 quarters, 2 dimes, 1 penny

// function convertCoinChange(money) {
//     // declare variables for different denominations (quarter, dime, nickel, penny)
//     q = 0 // each variable holds the count of each coin
//     d = 0
//     n = 0
//     p = 0 

//     // multiply input by 100 : 3.21 == 321
    
//     // take new number (321) and divide by 25 to get the number of quarters
//     // make sure to round down to get a whole number
//     // subtract the (# of quarters * 25) from the overall input # and then check the next denomination
//     // repeat for different denominations
//     // print and then return the data you collected
// }

function generateCoinChange(input) {

    var amout = Math.round(input * 100) // convert to cents - The Math.round is to fix a strange error on multiply operation
    var q = Math.floor(amout / 25)      // finding q value
    amout -= q * 25                     // remove q value
    var d = Math.floor(amout / 10)
    amout -= d *10
    var n = Math.floor(amout / 5)
    amout -= n *5
    var p = amout
    var output = ""
    if (q > 0){
        output += `$ ${input} -> ${q} quarters${((d > 0 || n > 0 || p >0 ) ? ', ' : '')}`
    }
    if (d > 0){
        output += `${d} dimes${((n > 0 || p >0 ) ? ', ' : '')}`
    }
    if (n > 0){
        output +=`${n} nickels${((p > 0) ? ', ' : '')}`
    }
    if (p > 0){
        output += p + " pennys"
    }
    return console.log(output)
}

generateCoinChange(1.87)