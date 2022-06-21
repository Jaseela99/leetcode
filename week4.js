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
 //////////////////////////////////////////////////////////////////////////////
 /////////day2

/* You are given an integer array heights representing the heights of buildings, some bricks, and some ladders.
You start your journey from building 0 and move to the next building by possibly using bricks or ladders.
While moving from building i to building i+1 (0-indexed),
If the current building's height is greater than or equal to the next building's height, you do not need a ladder or bricks.
If the current building's height is less than the next building's height, you can either use one ladder or (h[i+1] - h[i]) bricks.
Return the furthest building index (0-indexed) you can reach if you use the given ladders and bricks optimally. */
let heights = [4,2,7,6,9,14,12]  
let  bricks = 5
let  ladders = 1
var furthestBuilding = function(heights, bricks, ladders) {
    let len = heights.length - 1,
    pq = new MinPriorityQueue({priority: x => x})
for (let i = 0; i < len; i++) {
    let diff = heights[i+1] - heights[i]
    if (diff > 0) {
        if (ladders > 0) pq.enqueue(diff), ladders--
        else if (pq.front() && diff > pq.front().element)
            pq.enqueue(diff), bricks -= pq.dequeue().element
        else bricks -= diff
        if (bricks < 0) return i
    }
}
return len
};