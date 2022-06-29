/* A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros. For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.
Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary numbers needed so that they sum up to n.
Input: n = "32"
Output: 3
Explanation: 10 + 11 + 11 = 32 */


const minPartitions = n => Math.max(...n.split(''))
//////////////////////////////////////////////////////////
/////////day2
/* A string s is called good if there are no two different characters in s that have the same frequency.
Given a string s, return the minimum number of characters you need to delete to make s good.
The frequency of a character in a string is the number of times it appears in the string. For example, in the string "aab", the frequency of 'a' is 2, while the frequency of 'b' is 1.
Input: s = "aab"
Output: 0
Explanation: s is already good. */
var minDeletions = function(s) {
    let arr = Array(26).fill(0)
      let res = 0
      
      for(let i=0;i<s.length; i++){
          let index = s[i].charCodeAt(0) - 'a'.charCodeAt(0)
          arr[index]++
      }
      
      arr.sort((a,b)=>b-a)
      
      for(let i=1; i<26; i++){
          while(arr[i] && arr[i] >= arr[i-1]){
              arr[i]--
              res++
          }
      }
      
      return res   
  };


  /////////////////////////////////////////////////////////////
  /////////////day3
/*   You are given an array of people, people, which are the attributes of some people in a queue (not necessarily in order). Each people[i] = [hi, ki] represents the ith person of height hi with exactly ki other people in front who have a height greater than or equal to hi.

Reconstruct and return the queue that is represented by the input array people. The returned queue should be formatted as an array queue, where queue[j] = [hj, kj] is the attributes of the jth person in the queue (queue[0] is the person at the front of the queue).

 

Example 1:

Input: people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
Output: [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
Explanation:
Person 0 has height 5 with no other people taller or the same height in front.
Person 1 has height 7 with no other people taller or the same height in front.
Person 2 has height 5 with two persons taller or the same height in front, which is person 0 and 1.
Person 3 has height 6 with one person taller or the same height in front, which is person 1.
Person 4 has height 4 with four people taller or the same height in front, which are people 0, 1, 2, and 3.
Person 5 has height 7 with one person taller or the same height in front, which is person 1.
Hence [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]] is the reconstructed queue. */
let people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
var reconstructQueue = function(people) {
    let res = []
    people.sort((a, b) => a[0] == b[0] ? a[1] - b[1] : b[0] - a[0])
    people.forEach(val => {
        res.splice(val[1], 0, val)
    })
    return res 
};
