function isPalindrome(str){
    //palindrome - heleh
    // Not palindrome -hello

    return str === str.split('').reverse().join('')

}

console.log(isPalindrome('heleh'))