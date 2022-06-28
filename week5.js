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