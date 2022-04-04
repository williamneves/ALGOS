// isPalindrome(str) -> input is a single string (str). function returns true if
// the input is a palindrome and false otherwise.
// a palindrome is a word or phrase that is the same forwards or backwards
// for this example, capitalization and other punctuation matter
// "racecar" is a palindrome
// "tacocat"
// "raCecar" is not (a capital C is not the same as a lowercase c)
// "raceCar"
// "race car" is not (the space doesn't match up with the E on the opposite side)
// "rac ecar"


function isPalindrome(str) {
    var i = 0
    var j = str.length - 1
    while (i < j) {
        if (str[i] != str[j]) {
            return false
        }
        i++
        j--
    }
    return true
}


console.log(isPalindrome("racecar")); // return true
console.log(isPalindrome("raceecar")); // return true
console.log(isPalindrome("raceeeeeeeeeeeeecar")); // return true
console.log(isPalindrome("tacocat")); // return true
console.log(isPalindrome("race car")); // return false
console.log(isPalindrome("e racecar e")); // return true
console.log(isPalindrome("")); // return true
console.log(isPalindrome("a")); // return true
console.log(isPalindrome("123454321")); // return true
console.log(isPalindrome("1234 4321")); // return true
console.log(isPalindrome("znmz")); // return false

// longestPalindrome(str) -> input is a string
// output is the longest palindrome contained within that string
// if you find multiple palindromes of the same length, return the first one
// that you find
// "ehjgkkgeh" -> "gkkg"
// "ehjg kkgeh" -> "kk"
// "qwertttreqwerewy" -> "ertttre"
// "qwerttttttreqwerewy" -> "erttttttre"
// "abacabd" -> "bacab"
// "abacaed" -> "aba"
// "abcde" -> "a" (every character is effectively its own palindrome) or maybe "e"
// "a" -> "a" (lol)
// "I like to drive the racecar extremely fast" -> "e racecar e"
// "racecar" -> "racecar" (no need to use the previous function if you don't want to)

function longestPalindrome(str) {
    var i = 0
    var j = str.length - 1
    var pol = ''
    for (var a = 0; a < str.length;a++){
        for(var b = 0;b < str.length;b++){
            temp_a = a
            temp_b = b
            while (temp_a < temp_b) {
                if (str[temp_a] != str[temp_b]) {
                    a = temp_b
                    b = temp_b
                    break
                }
                temp_b++
                temp_b--
            }
            for (var x = temp_a; x <= temp_b;temp_a++){
                var poltemp ="" 
                poltemp+=str[temp_a]
                if (poltemp.length > pol.length){
                    pol = poltemp
                }
                
            }

        }
    }
    console.log(pol)
    
}

console.log(longestPalindrome("I like to drive the racecar extremely fast")) //"e racecar e"
console.log(longestPalindrome("I like to drive the raceecar extremely fast")) //"e raceecar e"
console.log(longestPalindrome("I like to drive the raceeecar extremely fast")) //"e raceeecar e"