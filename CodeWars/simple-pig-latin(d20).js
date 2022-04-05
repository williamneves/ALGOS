// # Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// # Examples
// # pig_it('Pig latin is cool') # igPay atinlay siay oolcay
// # pig_it('Hello world !')     # elloHay orldway !

function pigIt(str){
    
    var list_words = str.split(' ');

    for (var i = 0; i < list_words.length; i++) {
        var word = list_words[i];
        var first_letter = word.substring(0,1);
        var rest_word = word.substring(1, word.length);
        list_words[i] = rest_word + first_letter + 'ay';
    }

    return list_words.join(' ');
  }