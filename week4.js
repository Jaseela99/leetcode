/* A valid encoding of an array of words is any reference string s and array of indices indices such that:
words.length == indices.length
The reference string s ends with the '#' character.
For each index indices[i], the substring of s starting from indices[i] and up to (but not including) the next '#' character is equal to words[i].
Given an array of words, return the length of the shortest reference string s possible of any valid encoding of words.

Input: words = ["time", "me", "bell"]
Output: 10
Explanation: A valid encoding would be s = "time#bell#" and indices = [0, 2, 5].
words[0] = "time", the substring of s starting from indices[0] = 0 to the next '#' is underlined in "time#bell#"
words[1] = "me", the substring of s starting from indices[1] = 2 to the next '#' is underlined in "time#bell#"
words[2] = "bell", the substring of s starting from indices[2] = 5 to the next '#' is underlined in "time#bell#" */
let words = ["time", "me", "bell"]

var minimumLengthEncoding = function(words) {
    //to get unique characters
    let set = new Set(words)
    //for every word in array if set already has that word
     for (let word of words)
         if (set.has(word))
         //loops through the word and deletes the word
             for (let i = 1; i < word.length; i++) 
                 set.delete(word.slice(i))
                 //set + 2 hashes 
     return Array.from(set).join().length + 1  
 };
 console.log(minimumLengthEncoding(words))