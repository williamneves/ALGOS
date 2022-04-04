// Create a function that, given an input string, returns a boolean true/false whether parentheses in that string are valid.

// Example 1:"y(3(p)p(3)r)s" --> true
// Example 2: "n(0(p)3" --> false
// Example 3: "n)0(t(o)k" --> false

// hint: consider using an array or object to solve

// check entire string, return true/false
// every single opening parens has a closing
// never hit an closing parens before a opening parens
// ONLY care about the parens in the string

function parensValid(str) {
    lst_str = str.split('')
    par_list = []
    count = 0
    for (var i = 0; i < lst_str.length;i++){
        if (lst_str[i] == "(" || lst_str[i] == ")")
            par_list.push(lst_str[i])
    }
    console.log(par_list)
        for (var x = 0;x < par_list.length;x++){
            if (par_list[x] == '('){
                count++
            }
            else{
                count--
                if (count < 0){
                    return false
                }
            }
        }
        if (count == 0){
            return true
        }
        else {
            return false
        }
    }
console.log(parensValid("()())()("))


// Given a string, returns whether the sequence of various parentheses, braces and brackets within it are valid. 

// Example 1: "({[({})]})" --> true
// Example 2: "d(i{a}l[t]o)n{e!" --> false
// Example 2: "{{[a]}}(){bcd}{()}" --> true

// hint: consider using an array or object to solve

function bracesValid(str) {
    bracces_lst = str.split('')
    bracces_o = []
    bracces_c = []
    bracces_c = bracces_c.reverse()
    for (var x = 0;x<bracces_lst.length;x++){
        if (bracces_lst[x] == '[' || bracces_lst[x] == '(' || bracces_lst[x] == '{'){
            bracces_o.push(bracces_lst[x])
        }
        if (bracces_lst[x] == ']' || bracces_lst[x] == ')' || bracces_lst[x] == '}'){
            bracces_c.push(bracces_lst[x])
        }
    }
    bracces_c = bracces_c.reverse()
    console.log(bracces_o,bracces_c)

    if(bracces_c.length != bracces_o.length){
        return false
    }
    else{
        for (var i = 0;i<bracces_o.length;i++){
            console.log(bracces_o[i],bracces_c[bracces_o.length-1])
        }
    }
    
}
console.log(bracesValid("{{[a]}}(){bcd}{()}"))