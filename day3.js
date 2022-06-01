/*Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.*/

let s = "III";

var romanToInt = function (s) {
  var romanToNum = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  
   let num =0
  for (i=0; i < s.length; i++){
    const curr = romanToNum[s[i]];//takes the first value of s[i] from the object =>1
    const next = romanToNum[s[i+1]];//takes the next 5
    if (curr < next){
        num += next - curr //  5 - 1 = 4
        i++
        console.log(num)
    } else {
        num += curr //5
    }
}

return num; 
};
console.log(romanToInt(s));

//****************************************************************

//Given a binary string s and an integer k, return true if every binary code of length k is a substring of s. Otherwise, return false.
/* 
Input: s = "00110110", k = 2
Output: true
Explanation: The binary codes of length 2 are "00", "01", "10" and "11". They can be all found as substrings at indices 0, 1, 3 and 2 respectively.
 */

/* let s = "00110"
let k = 2
var hasAllCodes = function(s, k) {
    //if k is grater than string then false is returned
    if(s.length<k){
        return false
    }
    //set is defined to store unique values
    let subStr = new Set()
    //looping over the string and we need to get k length substrings ,so looping from k to s.length else it will start to store undefinedvalues
    for (let i=k;i<=s.length;i++){
        //to the set we add substring(i,i-k) if i ,k then it will store more than k length substrings
        subStr.add(s.substring(i,i-k))
        console.log(subStr,i,i-k)
    }
    //if size of set and 2 power k equals it returns true
    return (subStr.size === (2**k)) // 2**2 => 00 01 10 11    
};
console.log(hasAllCodes(s,k)) */
