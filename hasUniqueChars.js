//
//  Given a word, return true if that word contains only unique characters. Return false otherwise.
//

// Write your code below

const unique = (str) => {
    let uniqueChars = []

    for(let i =0 ; i< str.length; i++) {
        if(!uniqueChars.includes(str[i])){
            uniqueChars.push(str[i])
        }
        
    }

    return uniqueChars.length === str.length
}

console.log(unique('Bob'))

