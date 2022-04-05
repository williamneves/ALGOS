# Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

# Examples
# pig_it('Pig latin is cool') # igPay atinlay siay oolcay
# pig_it('Hello world !')     # elloHay orldway !

import re

def pig_it(text):
    list_words = text.split(' ')
    
    for i in range(len(list_words)):
        if re.search('[a-zA-Z]', list_words[i]):
            list_words[i] = list_words[i][1:] + list_words[i][0] + 'ay'
        else:
            list_words[i] = list_words[i]
            
    return ' '.join(list_words)
    
    
print(pig_it('This is my string'))